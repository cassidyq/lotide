const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  it("should return an object that contains each unique letter in the given string as a key", () => {
    const result = Object.keys(letterPositions('lighthouse labs'));
    assert.deepEqual(result, ['l', 'i', 'g', 'h', 't', 'o', 'u', 's', 'e', 'a', 'b']);
  });

  it("should return arrays of indices for the position(s) of each unique letter in the given string", () => {
    const positions = letterPositions('hello');
    let result = [];
    for ( const letter in positions) {
      result.push(positions[letter]);
    }
    assert.deepEqual(result, [[0], [1], [2, 3], [4]]);
  });

  it("should not return ' ' as a unique character of a given string", () => {
    const result = Object.keys(letterPositions('lighthouse labs'));
    assert.notInclude(result, ' ');
  });

});

// console.log(letterPositions('hello'));
// console.log(letterPositions('lighthouse in the house'));

// assertArraysEqual(letterPositions("hello").e, [1]);