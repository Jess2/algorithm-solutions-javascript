/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const arrS = s.trim().split(' ');

  return arrS[arrS.length - 1].length;
};

console.log(lengthOfLastWord("  Hello world"));
