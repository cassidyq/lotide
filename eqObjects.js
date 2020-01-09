const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2)=> {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        // do nothing
      } else {
        return false;
      }
    }
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1).sort();
  let keys2 = Object.keys(object2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  } else if (eqArrays(keys1, keys2)) {
    for (const key of keys1) {
      
      if (Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])) {
        return true;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => pass

ba.a = "3";
assertEqual(eqObjects(ab, ba), false); // => pass

const bc = { b: "2", c: "1" };
assertEqual(eqObjects(ab, bc), false); // => pass

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => pass

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false