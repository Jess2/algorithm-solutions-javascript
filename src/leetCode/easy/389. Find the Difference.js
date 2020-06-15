/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function(s, t) {
  let arrS = s.split('');

  for (let i = 0; i < arrS.length; i++) {
    t = t.replace(arrS[i], '');
  }

  return t;
};

console.log(findTheDifference("abcd", "abcde"));