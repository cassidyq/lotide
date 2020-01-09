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

const assertArraysEqual = (arr1, arr2)=> {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = (array, itemsToRemove)=> {
  let newArray = [];
  array.forEach(item => {
    if (itemsToRemove.includes(item)) {
      // do nothing
    } else {
      newArray.push(item);
    }
  });
  return newArray;
};

assertArraysEqual(without([1, 1, 1, 2], [1]), [2]); // => true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => true
assertArraysEqual(without([], [1, 2]), ["1", "2"]); // => false
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]); // => true

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true