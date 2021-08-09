/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      s = s.replace(s[i], String.fromCharCode(s[i - 1].charCodeAt(0) + Number(s[i])));
    }
  }

  return s;
};

console.log(replaceDigits('a1c1e1'));