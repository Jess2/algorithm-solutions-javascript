/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  let str = x.toString();
  return str.split("").reverse().join("") === str;
};

let result = isPalindrome(121);
console.log(result);