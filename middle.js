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

const middle = (array)=> {
  let newArray = [];
  const middleIndex = Math.ceil(array.length/2) - 1;

  if (array.length <=2) {
    return newArray;
  } else {
    newArray.push(array[middleIndex]);
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex + 1]);
    }
  }
  return newArray;
};

// Test code
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);