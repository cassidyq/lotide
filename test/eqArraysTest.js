const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("should return true when given two equal arrays [1, 2, 3] and [1, 2, 3]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(result, true);
  });

  it("should return false when given two arrays with same values in different order", () => {
    const result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.strictEqual(result, false);
  });

  it("should return false when given two arrays with same values but of different type ['1', '2', '3'], ['1', '2', 3]", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.strictEqual(result, false);
  });
  
  it("should return false when given two arrays of different length", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3, 4]);
    assert.strictEqual(result, false);
  });

  it("should return true when given two matching arrays of arrays [[2, 3], [4]] and [[2, 3], [4]]", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.strictEqual(result, true);
  });
 
  it("should return false when given two different arrays of arrays [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.strictEqual(result, false);
  });
  
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);