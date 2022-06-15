const { expect } = require('chai');
const {
  db,
  models: { Emotion, Order, OrderEmotion },
} = require('../index');
const seed = require('../../../script/seed');

describe('Emotion model', () => {
  let emotions;
  beforeEach(async () => {
    emotions = (await seed()).emotions;
  });
});
