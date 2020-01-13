const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return an array with only the middle value when given an array with an odd number of elements", () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });

  it("should return an array with the two middle values when given an array with an even number of elements", () => {
    const result2 = middle([1, 2, 3, 4]);
    assert.deepEqual(result2, [2, 3]);
  });
  
  it("should return an empty array when given an array with 2 elements", () => {
    const result3 = middle(["Lighthouse", "Labs"]);
    assert.deepEqual(result3, []);
  });

  it("should return an empty array when given an array with 1 element", () => {
    const result4 = middle(["LighthouseLabs"]);
    assert.deepEqual(result4, []);
  });
  
});


// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);