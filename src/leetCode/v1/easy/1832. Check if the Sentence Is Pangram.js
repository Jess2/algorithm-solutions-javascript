/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
  for (let i = 0; i < 26; i++) {
    const alphabet = String.fromCharCode(97 + i);

    if (!sentence.includes(alphabet)) {
      return false;
    }
  }

  return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));