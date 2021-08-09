/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParityII = function(A) {
  let evenArr = [];
  let oddArr = [];
  let resultArr = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evenArr.push(A[i]);
    } else {
      oddArr.push(A[i]);
    }
  }

  for (let i = 0; i < A.length / 2; i++) {
    resultArr.push(evenArr[i]);
    resultArr.push(oddArr[i]);
  }

  return resultArr;
};

console.log(sortArrayByParityII([4,2,5,7]));