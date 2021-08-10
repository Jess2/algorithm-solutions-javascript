/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const xStr = x.toString();
  const reversedXStr = xStr.split('').reverse().join('');

  return reversedXStr === xStr;
};

console.log(isPalindrome(101));