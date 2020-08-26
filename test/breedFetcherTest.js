const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  // it('returns a string description for a valid breed, via callback', (done) => {
  //   fetchBreedDescription('Siberian', (err, desc) => {
  //     // we expect no error for this scenario
  //     assert.equal(err, null);

  //     const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

  //     // compare returned description
  //     assert.equal(expectedDesc, desc);

  //     done();
  //   });
  //});
  it('returns error where an invalid/non-existent breed is passed', (done) => {
    fetchBreedDescription('Whatever', (error,desc) => {
      assert.equal(error, "doesn't exist");
      assert.equal(null,desc);
      done();
    });
  });

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Burmese', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expected = "Burmese love being with people, playing with them, and keeping them entertained. They crave close physical contact and abhor an empty lap. They will follow their humans from room to room, and sleep in bed with them, preferably under the covers, cuddled as close as possible. At play, they will turn around to see if their human is watching and being entertained by their crazy antics.";
      // compare returned description
      assert.equal(expected, desc);

      done();
    });
  });
});