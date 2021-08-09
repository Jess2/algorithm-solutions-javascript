/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
  let strArr = s.split(' ');
  let resultStr = '';

  for (let i = 0; i < strArr.length; i++) {
    resultStr += strArr[i].split('').reverse().join('') + ' ';
  }

  return resultStr.trim();
};

console.log(reverseWords("Let's take LeetCode contest"));