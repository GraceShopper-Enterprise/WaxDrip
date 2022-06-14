const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Emotion = db.define('emotion', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  stockQuantity: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  reccomendedEmpathyLevel: {
    type: Sequelize.ENUM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
    defaultValue: 1,
  },
});

module.exports = Emotion;
