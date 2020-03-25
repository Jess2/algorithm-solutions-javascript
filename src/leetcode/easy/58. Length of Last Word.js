/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let strArray = s.trim().split(' ');
  return strArray[strArray.length - 1].length;
};

let result = lengthOfLastWord("Hello World");
console.log(result);