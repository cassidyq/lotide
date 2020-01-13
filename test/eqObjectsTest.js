const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("should return true when given two equal objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = eqObjects(ab, ba);
    assert.strictEqual(result, true);
  });

  it("should return false when given two objects with same keys but different values for those keys", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "3" };
    const result = eqObjects(ab, ba);
    assert.strictEqual(result, false);
  });

  it("should return false when given two objects of different lengths", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const result = eqObjects(ab, abc);
    assert.strictEqual(result, false);
  });
  
  it("should return true when given two objects that contain the same object values", () => {
    
    const result = eqObjects({ a: { z: {c: 3} }, b: 2 }, { a: { z: {c: 3} }, b: 2 });
    assert.strictEqual(result, true);
  });
 
  it("should return false when given two objects that contain different objects", () => {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    assert.strictEqual(result, false);
  });
  
});


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => pass

// ba.a = "3";
// assertEqual(eqObjects(ab, ba), false); // => pass

// const bc = { b: "2", c: "1" };
// assertEqual(eqObjects(ab, bc), false); // => pass

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => pass

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: {c: 3} }, b: 2 }, { a: { z: {c: 3} }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false