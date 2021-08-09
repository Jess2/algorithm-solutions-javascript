/**
 * @param {string} s
 * @return {number}
 */
let maxPower = function(s) {
  let arr = s.split('');
  let count = 1;
  let maxCount = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 1;
    }
  }

  return maxCount;
};

console.log(maxPower("leetcode"));