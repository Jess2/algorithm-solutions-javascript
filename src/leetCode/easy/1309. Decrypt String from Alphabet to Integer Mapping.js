/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function(s) {
  let formedStr = '';

  for (let i = 0; i < s.length; i++) {
    let partStr;

    if (i < s.length - 2 && s[i + 2] === '#') {
      partStr = s.slice(i, i + 2);
      i += 2;
    } else {
      partStr = s[i];
    }

    formedStr += String.fromCharCode(Number(partStr) + 96);
  }

  return formedStr;
};

console.log(freqAlphabets("10#11#12"));