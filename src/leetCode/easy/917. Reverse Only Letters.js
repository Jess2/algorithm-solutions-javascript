/**
 * @param {string} S
 * @return {string}
 */
let reverseOnlyLetters = function(S) {
  let arrS = S.split('');
  let engStr = S.replace(/[^a-zA-Z]/gi, '').split('').reverse().join('');
  let index = 0;

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i].match(/[a-zA-Z]/)) {
      arrS[i] = engStr[index++];
    }
  }

  return arrS.join('');
};

console.log(reverseOnlyLetters("ab-cd"));