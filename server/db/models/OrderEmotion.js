const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');
const Emotion = require('./Emotion');
const Order = require('./Order')

const OrderEmotion = db.define('orderEmotion', {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  emotionQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  emotionPriceAtPurchase: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0,
    allowNull: false,
  },
});

const assignPrice = async (orderEmotion) => {
  const emotion = await Emotion.findByPk(orderEmotion.emotionId);
  const emotionPrice = emotion.price;
  orderEmotion.emotionPriceAtPurchase = emotionPrice;
};

OrderEmotion.beforeCreate(assignPrice);
OrderEmotion.beforeBulkCreate((orderEmotion) =>
  Promise.all(orderEmotion.map(assignPrice))
);



module.exports = OrderEmotion;
