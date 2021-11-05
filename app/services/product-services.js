const db = require("../models");
const Product = db.product;
// const Op = db.Sequelize.Op;

// Add new product
exports.create = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const product = {
    name: req.body.name,
    price: req.body.price,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false
  };

  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when add a product!"
      });
    });
};

// Find all products
exports.findAll = (req, res) => {
  Product.findAll({ where: {isDeleted: false} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when get all product!"
      });
    });
};

// Find product by product id
exports.findOne = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Product not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error when get product by product id : " + id
      });
    });
};

// Update product by product id
exports.update = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product successfully updated."
        });
      } else {
        res.send({
          message: "Update process was failedQ"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating product with product id : " + id
      });
    });
};

// Delete product by product id
exports.delete = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  
  const id = req.body.id;
  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product successfully deleted."
        });
      } else {
        res.send({
          message: "Delete process was failed!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Couldn't delete product with product id : " + id
      });
    });
};

function validateRequest(req){
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!"
    });
    return;
  }
}


