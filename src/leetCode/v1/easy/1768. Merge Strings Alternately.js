/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
  let mergeStr = '';

  for (let i = 0; i < word1.length; i++) {
    mergeStr += word1[i];

    if (word2[i]) {
      mergeStr += word2[i];
    }
  }

  mergeStr += word2.substring(word1.length);

  return mergeStr;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));