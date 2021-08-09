/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const arrS = new Array(s.length);

  for (let i = 0; i < indices.length; i++) {
    arrS[indices[i]] = s[i];
  }

  return arrS.join('');
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));