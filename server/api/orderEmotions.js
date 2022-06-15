const router = require("express").Router();
const {
  models: { OrderEmotion },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const orderEmotions = await OrderEmotion.findAll();
    res.json(orderEmotions);
  } catch (err) {
    next(err);
  }
});
