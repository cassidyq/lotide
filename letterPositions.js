//returns an object with all the indices (zero-based positions) in the string 
//where each character is found.
const letterPositions = function(sentence) {
  sentence = sentence.trim().toLowerCase();
  const results = {};
  let index = 0;
  
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
  return results;
};

module.exports = letterPositions;
