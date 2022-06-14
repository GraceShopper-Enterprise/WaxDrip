const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const CartEmotion = db.define("cartEmotion", {
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = CartEmotion;
