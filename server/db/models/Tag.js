const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Tag = db.define('tag', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
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
module.exports = Tag;
