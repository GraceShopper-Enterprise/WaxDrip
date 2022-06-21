const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
const OrderEmotion = require("../db/models/OrderEmotion");
module.exports = router;

// GET /api/orders
// get all orders, ordered by id
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ order: [["id", "ASC"]] });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:orderId
// get single order
router.get("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(order);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:orderId/emotionData
// get single order's emotion Data, i.e. quantities and saved prices
router.get("/:orderId/emotionData", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    const emotionData = await OrderEmotion.findAll({
      where: { orderId: order.id },
    });
    res.send(emotionData);
  } catch (err) {
    next(err);
  }
});

// POST /api/orders/
// add new order
router.post("/", async (req, res, next) => {
  try {
    res.send(await Order.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId
// edit an order
router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId/:emotionId/unassign
// remove emotion from an order/cart/wishlist
router.put("/:orderId/:emotionId/unassign", async (req, res, next) => {
  try {
    console.log("hihihi");
    const order = await Order.findByPk(req.params.orderId);
    res.json(await order.removeEmotion(req.params.emotionId));
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId/:emotionId/assign
// add emotion to an order/cart/wishlist
router.put("/:orderId/:emotionId/assign", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(await order.addEmotion(req.params.emotionId));
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId/:emotionId/:quantity
// change quant of emotion in order/cart/wishlist
router.put("/:orderId/:emotionId/:quantity", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(
      await order.setEmotionQuantity(req.params.emotionId, req.params.quantity)
    );
  } catch (error) {
    next(error);
  }
});

// DELETE /api/orders/:orderId
router.delete("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    await order.destroy();
    res.send(order);
  } catch (error) {
    next(error);
  }
});
