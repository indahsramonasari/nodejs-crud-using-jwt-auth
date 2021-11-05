const database = require("../models");
const configuration = require("../config/config-jwt.js");
const User = database.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  .then(res.send({ message: "User successfully registered" }))
  .catch(exception => {
    res.status(500).send({ message: exception.message });
  });
};

exports.signin = (req, res) => {
  validateRequest(req);

  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (!user) {
      return res.status(404).send({ 
          message: "User not found" });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid password!"
        });
    }

    // Set expired token in 10 minutes
    var token = jwt.sign({ id: user.id }, configuration.secret, {
      expiresIn: 86400
    });

    user.then(
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
      }))
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

function validateRequest(req){
  if (!req.body) {
    res.status(400).send({
      message: "Request can't be empty!"
    });
    return;
  }
}
