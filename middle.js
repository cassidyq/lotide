const middle = (array)=> {
  let newArray = [];
  const middleIndex = Math.ceil(array.length / 2) - 1;

  if (array.length <= 2) {
    return newArray;
  } else {
    newArray.push(array[middleIndex]);
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex + 1]);
    }
  }
  return newArray;
};

module.exports = middle;

// Test code
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);