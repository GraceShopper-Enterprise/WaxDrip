const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const Order = require("./Order");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  type: {
    type: Sequelize.ENUM("siteAdmin", "customer"),
    defaultValue: "customer",
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

//new methods
User.prototype.getCart = async function () {
  const cart = await Order.findOne({
    where: { userId: this.id, status: "cart" },
  });
  return cart;
};

User.prototype.getWishlists = async function () {
  const wishlists = await Order.findAll({
    where: { userId: this.id, status: "wishlist" },
  });
  return wishlists;
};

User.prototype.getOldOrders = async function () {
  const oldOrders = await Order.findAll({
    where: {
      userId: this.id,
      status: {
        [Op.or]: ["ordered", "en-route", "delivered"],
      },
    },
  });
  return oldOrders;
};

User.prototype.checkoutCart = async function () {
  const cart = await this.getCart();
  const date = new Date();
  await cart.update({ status: "ordered", datePurchased: date });
  this.createOrder({ status: "cart" });
};

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);

    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

const makeCart = async (user) => {
  user.createOrder({ status: "cart" });
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

User.afterCreate(makeCart);
User.afterBulkCreate((users) => Promise.all(users.map(makeCart)));
