const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller: "The Wire"
};

describe("#findKeyByValue", () => {

  it("should return the key when given and object and the key's value within the object", () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine');
    assert.strictEqual(result, 'comedy');
  });

  it("should return undefined when given an object and a key value that doesn't exist in the object", () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'That 70s Show');
    assert.strictEqual(result, undefined);
  });

  it("should return the first key of a value when given an object with two keys that have the same value", () => {
    const result = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    assert.strictEqual(result, 'drama');
  });

});

//Tests:

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Get Out"), "drama");