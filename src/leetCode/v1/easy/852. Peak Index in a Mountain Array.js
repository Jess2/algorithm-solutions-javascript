/**
 * @param {number[]} A
 * @return {number}
 */
let peakIndexInMountainArray = function(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      return i;
    }
  }
};

console.log(peakIndexInMountainArray([0,2,1,0]));