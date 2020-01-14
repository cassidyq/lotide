// takes in an array of arrays and returns a "flattened" version of the array.
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

module.exports = flatten;