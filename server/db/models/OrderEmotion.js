const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const OrderEmotion = db.define("orderEmotion", {
  orderId: {
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
  emotionPriceAtPurchase: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderEmotion;
