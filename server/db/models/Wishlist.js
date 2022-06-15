const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');
const Cart = require('./Cart');

const Wishlist = db.define('wishlist', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Wishlist.prototype.moveEmotionToCart = async function (emotion_Id) {
  // move emotion from wishlist to cart
  // check if cart exists already for the user with a wishlist
  // already assigns to user when created
  const [cart, created] = await Cart.findOrCreate({
    where: { userId: this.userId },
  });
  await cart.addEmotion(emotion_Id);
  await this.removeEmotion(emotion_Id);
};

module.exports = Wishlist;
