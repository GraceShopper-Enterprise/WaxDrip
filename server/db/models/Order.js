const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');
const OrderEmotion = require('./OrderEmotion');
const Emotion = require('./Emotion');

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM(
      'wishlist',
      'cart',
      'ordered',
      'en-route',
      'delivered'
    ),
  },
  datePurchased: {
    type: Sequelize.DATE,
  },
});

/**
 * instanceMethods
 */

Order.prototype.setEmotionQuantity = async function (emotion_Id, amount) {
  //adjust quantity of that specific emotion
  const orderEmotion = await OrderEmotion.findOne({
    where: { orderId: this.id, emotionId: emotion_Id },
  });
  if (orderEmotion === null) {
    const error = Error('Emotion was not found in this cart');
    error.status = 401;
    throw error;
  }
  await orderEmotion.update({ emotionQuantity: amount });
};

/**
 * classMethods
 */

/**
 * hooks
 */

Order.beforeUpdate(async (order) => {
  if (order.previous('status') === 'cart' && order.status === 'ordered') {
    // get prices at purchase and assign them
    const orderEmotions = await OrderEmotion.findAll({
      where: { orderId: order.id },
    });
    await Promise.all(
      orderEmotions.map(async (orderEmotion) => {
        const emotion = await Emotion.findByPk(orderEmotion.emotionId);
        const emotionPrice = emotion.price;
        orderEmotion.emotionPrice = emotionPrice;
      })
    );
  }
});

module.exports = Order;
