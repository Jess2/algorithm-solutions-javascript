/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = function(words) {
  let morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let wordCodes = [];

  for (let i = 0; i < words.length; i++) {
    let wordCode = '';
    for (let j = 0; j < words[i].length; j++) {
      let morseIndex = words[i][j].charCodeAt(0) - 97;
      wordCode += morseCodes[morseIndex];
    }
    if (!wordCodes.includes(wordCode)) {
      wordCodes.push(wordCode);
    }
  }
  return wordCodes.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
