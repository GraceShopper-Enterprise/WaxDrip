const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Orders = db.define("order", {
  status: {
    type: Sequelize.ENUM("confirmed", "en-route", "delivered"),
    defaultValue: "confirmed",
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = Orders;
