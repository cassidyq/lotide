const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 when given [5, 6, 7]", () => {
    const results = head([5,6,7]);
    assert.strictEqual(results, 5);
  });

  it("returns 'Hello' when given ['Hello', 'Lighthouse', 'Labs']", () => {
    const results = head(['Hello', 'Lighthouse', 'Labs']);
    assert.strictEqual(results, 'Hello');
  });

  it("returns '1' when given []", () => {
    const results = head([]);
    assert.notStrictEqual(results, '1');
  });

});


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 1);