const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

module.exports = Cart;
