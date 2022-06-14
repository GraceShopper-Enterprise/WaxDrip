const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const CartEmotion = db.define('cartEmotion', {
  cartId: {
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
});

module.exports = CartEmotion;

