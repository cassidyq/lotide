const findKeyByValue = (dataset, value)=> {
  for (const key in dataset) {
    if (dataset[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
