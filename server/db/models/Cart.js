const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');
const CartEmotion = require('./CartEmotion');
const Order = require('./Order');
const OrderEmotion = require('./OrderEmotion');
const User = require('./User');

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
});

//instance methods//

Cart.prototype.setEmotionQuantity = async function (emotion_Id, amount) {
  //adjust quantity of that specific emotion
  const cartEmotion = await CartEmotion.findOne({
    where: { cartId: this.id, emotionId: emotion_Id },
  });
  if (cartEmotion === null) {
    const error = Error('Emotion was not found in this cart');
    error.status = 401;
    throw error;
  }
  await cartEmotion.update({ emotionQuantity: amount });
};

Cart.prototype.createOrderFromCart = async function () {
  //create order and assign to same user
  const order = await Order.create({});
  const user = await User.findByPk(this.userId);
  await user.addOrder(order.id);

  //set all cartEmotions to be orderEmotions
  const cartEmotions = await CartEmotion.findAll({
    where: { cartId: this.id },
  });
  await Promise.all(
    cartEmotions.map(async (cartEmotion) => {
      const emotion_Id = cartEmotion.emotionId;
      const emotion_Quantity = cartEmotion.emotionQuantity;
      await order.addEmotion(emotion_Id);
      const orderEmotion = await OrderEmotion.findOne({
        where: { orderId: order.id, emotionId: emotion_Id },
      });
      await orderEmotion.update({ emotionQuantity: emotion_Quantity });
    })
  );

  // empty cart by destroying
  // destroying instance will destroy relevant entries
  // in the cartEmotions table as well
  this.destroy();
};

module.exports = Cart;
