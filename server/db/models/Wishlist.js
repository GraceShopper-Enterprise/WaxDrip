const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Wishlist = db.define('wishlist', {
  userId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

module.exports = Wishlist;
