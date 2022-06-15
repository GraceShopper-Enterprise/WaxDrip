const router = require("express").Router();
const {
  models: { Emotion },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll();
    res.json(emotions);
  } catch (err) {
    next(err);
  }
});
