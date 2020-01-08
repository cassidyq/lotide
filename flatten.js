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

const flatten = (arrays)=> {
  let newArray = [];
  arrays.forEach((array)=> {
    if (Array.isArray(array)) {
      array.forEach((element)=> {
        newArray.push(element);
      });
    } else {
      newArray.push(array);
    }
  });
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
assertArraysEqual(flatten([1, 2, [3, 4], [4, 5]]), [1, 2, 3, 4, 4, 5]); // => true
assertArraysEqual(flatten([[1], [2], [3]]), [1, 2, 3]); // => true