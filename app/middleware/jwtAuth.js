const jwt = require("jsonwebtoken");
const configuration = require("../config/config-jwt.js");
const database = require("../models");
const User = database.user;

verifyToken = (req, res, next) => {
    console.log("Request header : ", req.headers);
    let token = req.headers["access-token"];
    if (!token) {
        return res.status(403).send({
            message: "Error when get token!"
        });
    }
    
    jwt.verify(token, configuration.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "User unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const jwtAuth = {
  verifyToken: verifyToken
};

module.exports = jwtAuth;
