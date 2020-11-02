/**
 * @param {number[]} A
 * @return {boolean}
 */
let isMonotonic = function(A) {
  let isIncreasingArr = [];
  let isDecreasingArr = [];

  if (A.length === 1) {
    return true;
  }

  for (let i = 0; i < A.length - 1; i++) {
    if (!isIncreasingArr.includes(A[i + 1] - A[i] >= 0)) {
      isIncreasingArr.push(A[i + 1] - A[i] >= 0);
    }
    if (!isDecreasingArr.includes(A[i + 1] - A[i] <= 0)) {
      isDecreasingArr.push(A[i + 1] - A[i] <= 0);
    }
  }

  return isIncreasingArr.length === 1 || isDecreasingArr.length === 1;
};

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([1,1,1]));
console.log(isMonotonic([9]));