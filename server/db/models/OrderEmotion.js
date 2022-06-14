const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const OrderEmotion = db.define('orderEmotion', {
  orderId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  emotionQuantity: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  emotionPriceAtPurchase: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

module.exports = OrderEmotion;

