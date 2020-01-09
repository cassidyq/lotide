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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

assertObjectsEqual({a: '1', b: '2'}, {b: '2', a: '1'});
assertObjectsEqual({a: '3', c:['1', 2]}, {a: '3', b: ['1', 2]});