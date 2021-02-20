// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let leftSum = 0;
  let rightSum = sumInArray(A);
  let minDiff = Number.MAX_VALUE;

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    let diff = Math.abs(leftSum - rightSum);

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

function sumInArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution([3,1,2,4,3]));