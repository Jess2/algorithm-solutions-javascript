/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
  let oddSize = -1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    oddSize += 2;

    for (let k = 0; k < arr.length; k++) {
      if (k + oddSize <= arr.length) {
        for (let j = k; j < k + oddSize; j++) {
          sum += arr[j];
        }
      }
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));