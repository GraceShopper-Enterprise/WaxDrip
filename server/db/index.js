//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Order = require('./models/Order');
const Emotion = require('./models/Emotion');
const OrderEmotion = require('./models/OrderEmotion');
const Tag = require('./models/Tag');

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Emotion, { through: OrderEmotion });
Emotion.belongsToMany(Order, { through: OrderEmotion });

Tag.belongsToMany(Emotion, { through: 'TagEmotion' });
Emotion.belongsToMany(Tag, { through: 'TagEmotion' });

module.exports = {
  db,
  models: {
    User,
    Emotion,
    Order,
    OrderEmotion,
    Tag,
  },
};
