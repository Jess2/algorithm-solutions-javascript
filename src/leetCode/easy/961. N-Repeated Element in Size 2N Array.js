/**
 * @param {number[]} A
 * @return {number}
 */
let repeatedNTimes = function(A) {
  let objA = {};

  for (let i = 0; i < A.length; i++) {
    if (objA[A[i]]) {
      objA[A[i]]++;
      continue;
    }
    objA[A[i]] = 1;
  }

  for (const property in objA) {
    if (objA[property] === A.length / 2) {
      return property;
    }
  }
};

console.log(repeatedNTimes([1,2,3,3]));