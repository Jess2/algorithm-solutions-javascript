/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
let shortestToChar = function(S, C) {
  let arr = S.split('');
  let resultArr = new Array(arr.length);
  let foundIndexArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === C) {
      foundIndexArr.push(i);
    }
  }

  for (let i = 0; i < foundIndexArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let subValue = Math.abs(foundIndexArr[i] - j);
      if (i === 0 || resultArr[j] > subValue) {
        resultArr[j] = subValue;
      }
    }
  }

  return resultArr;
};

console.log(shortestToChar("aaab", 'b'));