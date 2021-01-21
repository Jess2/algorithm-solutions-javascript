/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function(allowed, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let arr = words[i].split('');

    const isConsistentStr = arr.every(wordUnit => {
      return allowed.indexOf(wordUnit) !== -1;
    });

    if (isConsistentStr) {
      count++;
    }
  }

  return count;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));