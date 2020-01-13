const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  it("should return an object", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.typeOf(result, 'object');
  });

  it("should return the correct count of a specified string in the given array", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(result['Jason'], 1);
  });

  it("should return undefined if the specified string in not in the given array", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.isUndefined(result['Karima']);
  });
  
  it("should not include a value in the returned object if not specified", () => {
    const result = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true });
    assert.notInclude(Object.keys(result), 'Jason');
  });

});


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);