const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Wishlist = db.define("wishlist", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Wishlist;
