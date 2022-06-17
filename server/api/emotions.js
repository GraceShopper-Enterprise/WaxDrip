const router = require("express").Router();
const {
  models: { Emotion },
} = require("../db");
module.exports = router;

// GET /api/emotions
// get all emotions, ordered by id
router.get("/", async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll({ order: [["id", "ASC"]] });
    res.json(emotions);
  } catch (err) {
    next(err);
  }
});

// GET /api/emotions/:emotionId
// get single emotion
router.get("/:emotionId", async (req, res, next) => {
  try {
    const emotion = await Emotion.findByPk(req.params.emotionId);
    res.send(emotion);
  } catch (err) {
    next(err);
  }
});

// POST /api/emotions/
// add new emotion
router.post("/", async (req, res, next) => {
  try {
    res.send(await Emotion.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/emotions/:emotionId
// edit an emotion
router.put("/:emotionId", async (req, res, next) => {
  try {
    const emotion = await Emotion.findByPk(req.params.emotionId);
    res.send(await emotion.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/emotions/:emotionId
router.delete("/:emotionId", async (req, res, next) => {
  try {
    const emotion = await Emotion.findByPk(req.params.emotionId);
    await emotion.destroy();
    res.send(emotion);
  } catch (error) {
    next(error);
  }
});
