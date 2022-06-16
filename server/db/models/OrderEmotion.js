const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');
const Emotion = require('./Emotion');

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
  emotionPriceInOrder: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
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

const assignPrice = async (orderEmotion) => {
  const emotion = await Emotion.findByPk(orderEmotion.emotionId);
  const emotionPrice = emotion.price;
  orderEmotion.emotionPriceInOrder = emotionPrice;
};

// assign price whenever first created, or when the quantity changes
OrderEmotion.beforeCreate(assignPrice);
OrderEmotion.beforeBulkCreate((orderEmotion) =>
  Promise.all(orderEmotion.map(assignPrice))
);

OrderEmotion.beforeUpdate(assignPrice);
OrderEmotion.beforeBulkUpdate((orderEmotion) =>
  Promise.all(orderEmotion.map(assignPrice))
);

module.exports = OrderEmotion;
