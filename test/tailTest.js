const tail = require('../tail');

const assert = require('chai').assert;

describe("#tail", () => {
  it("should return everything but the head", () => {
    const result2 = tail([1, 2, 3, 4, 5]);
    assert.deepEqual(result2, [2, 3, 4, 5]);
  });

  it("should return array length 2 when given length 3", () => {
    const result2 = tail([1, 2, 3]);
    assert.equal(result2.length, 2);
  });
  
  it("should not modify the original array after calling it with tail", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(["Yo Yo", "Lighthouse", "Labs"], words);
  });
  
});

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!\

// //Test Case 3: Check the returned array
// const result2 = tail([1, 2, 3, 4, 5]);
// assertEqual(eqArrays(result2, [2, 3, 4, 5]), true);