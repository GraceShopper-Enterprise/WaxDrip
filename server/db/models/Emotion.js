const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Emotion = db.define('emotion', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  stockQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  reccomendedEmpathyLevel: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
module.exports = Emotion;
