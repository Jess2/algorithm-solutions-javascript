/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

let result = strStr("hello", "ll");
console.log(result);