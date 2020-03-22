// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minSub = 0;

  for (let i = 1; i < A.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    let sub = 0;

    for (let j = 0; j < i; j++) {
      leftSum += A[j];
    }
    for (let k = i; k < A.length; k++) {
      rightSum += A[k];
    }

    sub = leftSum > rightSum ? leftSum - rightSum : rightSum - leftSum;

    if (i === 1 || sub < minSub) {
      minSub = sub;
    }
  }

  return minSub;
}

let result = solution([3,1,2,4,3]);
console.log(result);