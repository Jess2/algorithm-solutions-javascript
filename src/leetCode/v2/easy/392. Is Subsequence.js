/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let prevIndex = -1;

  for (let i = 0; i < s.length; i++) {
    t = t.substring(prevIndex + 1);
    const index = t.indexOf(s[i]);

    if (index === -1) {
      return false;
    }

    prevIndex = index;
  }

  return true;
};

console.log(isSubsequence("twn", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"));
// console.log(isSubsequence("aaaaaa", "bbaaaa"))