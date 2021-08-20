/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  function sortString(str) {
    return str.split('').sort().join('');
  }

  return sortString(s) === sortString(t);
};

console.log(isAnagram("anagram", "nagaram"));