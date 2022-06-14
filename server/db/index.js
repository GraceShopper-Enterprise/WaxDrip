//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Order = require('./models/Order');
const Cart = require('./models/Cart');
const Emotion = require('./models/Emotion');
const OrderEmotion = require('./models/OrderEmotion');
const CartEmotion = require('./models/CartEmotion');
const Wishlist = require('./models/Wishlist');

//associations could go here!
User.hasOne(Cart);
Cart.belongsTo(User);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Emotion, { through: OrderEmotion });
Emotion.belongsToMany(Order, { through: OrderEmotion });

Cart.belongsToMany(Emotion, { through: CartEmotion });
Emotion.belongsToMany(Cart, { through: CartEmotion });

Wishlist.belongsToMany(Emotion, { through: WishlistEmotion });
Emotion.belongsToMany(Wishlist, { through: WishlistEmotion });

module.exports = {
  db,
  models: {
    User,
    Emotion,
    Order,
    Cart,
    Wishlist,
    OrderEmotion,
    CartEmotion,
  },
};
