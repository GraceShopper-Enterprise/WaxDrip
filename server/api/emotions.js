const router = require("express").Router();
const {
  models: { Emotion },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll({ order: [["id", "ASC"]] });
    res.json(emotions);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const emotionDelete = await Emotion.findByPk(req.params.id);
    await emotionDelete.destroy();
    res.send(emotionDelete);
  } catch (error) {
    next(error);
  }
});
