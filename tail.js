const assertEqual = require('./assertEqual');

// get the tail of a given array
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
