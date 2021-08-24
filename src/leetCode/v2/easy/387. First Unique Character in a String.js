/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], sMap.get(s[i]) ? sMap.get(s[i]) + 1 : 1);
  }

  for (let [key, value] of sMap) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("lll"));