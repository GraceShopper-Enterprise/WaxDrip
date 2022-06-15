/* global describe beforeEach it */

const { expect } = require('chai');
const {
  db,
  models: { Emotion },
} = require('../index');
const seed = require('../../../script/seed');

describe('Emotion model', () => {
  let emotions;
  beforeEach(async () => {
    emotions = (await seed()).emotions;
  });

  describe('emotions', () => {
    describe('reccomendedEmpathyLevel', () => {
      it('Allows a number value between 0 thru 10', async () => {
        let emotion = await Emotion.create({
          name: 'test1',
          price: 12.0,
          stockQuantity: 0,
          reccomendedEmpathyLevel: 5,
        });
        expect(emotion.reccomendedEmpathyLevel).to.equal(5);
      });
      it('does not allow a number value outside 0 thru 10', async () => {
        try {
          let emotion = await Emotion.create({
            name: 'test2',
            price: 15.0,
            stockQuantity: 0,
            reccomendedEmpathyLevel: 12,
          });
          throw 'nooo';
        } catch (ex) {
          console.log(ex.errors[0].type);
          expect(ex.errors[0].type).to.equal('Validation error');
        }
      });
    });
  });
}); // end describe('Emotion model'0
