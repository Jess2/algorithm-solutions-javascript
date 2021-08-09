/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros = function(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.splice(length, arr.length - length);
      i++;
    }
  }

  console.log(arr);
};

duplicateZeros([1,0,2,3,0,4,5,0]);