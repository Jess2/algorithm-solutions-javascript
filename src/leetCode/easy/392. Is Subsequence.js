/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t) {
  if (s.length === 0) {
    return true;
  }

  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = startIndex; j < t.length; j++) {
      if (t[j] === s[i]) {
        startIndex = j + 1;
        if (i === s.length - 1) {
          return true;
        }
        break;
      } else {
        if (j === t.length - 1) {
          return false;
        }
      }
    }
  }
  return false;
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));