const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Cart = db.define("cart", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
