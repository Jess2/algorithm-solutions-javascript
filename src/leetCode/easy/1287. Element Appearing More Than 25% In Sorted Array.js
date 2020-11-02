/**
 * @param {number[]} arr
 * @return {number}
 */
let findSpecialInteger = function(arr) {
  let standardLength = arr.length * 0.25;
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      if (count >= standardLength) {
        return arr[i];
      }
    } else {
      count = 0;
    }
  }

  return arr[0];
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));