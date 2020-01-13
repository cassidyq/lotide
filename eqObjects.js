// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1).sort();
  let keys2 = Object.keys(object2).sort();

  if (keys1.length !== keys2.length) {
    return false; // works
  }
  for (const key of keys1) {
  
    if (typeof object1[key] === 'object' || Array.isArray(object1[key])) {
        
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

