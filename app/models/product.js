module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    isDeleted: {
      type: Sequelize.BOOLEAN
    }
  });
  return Product;
};
