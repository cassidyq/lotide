const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("should return an empty array when given an empty array", () => {
    const result = flatten([]);
    assert.deepEqual(result, []);
  });

  it("should return a flattened array when given an array of arrays", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

  it("should return an array with one level of arrays removed when given a mutli-nested array", () => {
    const result = flatten([1, 2, 3, [[4]], 5, [[6]]]);
    assert.deepEqual(result, [1, 2, 3, [4], 5, [6]]);
  });

});

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
// assertArraysEqual(flatten([1, 2, [3, 4], [4, 5]]), [1, 2, 3, 4, 4, 5]); // => true
// assertArraysEqual(flatten([[1], [2], [3]]), [1, 2, 3]); // => true