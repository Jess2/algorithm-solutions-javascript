/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    const regexStr = new RegExp(s[i]);

    if (t.indexOf(s[i]) !== -1) {
      t = t.replace(regexStr, '');
      continue;
    }

    return false;
  }

  return t === '';
};

console.log(isAnagram('anagram', 'nagaram'));