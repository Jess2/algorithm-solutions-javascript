// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minDiffValue = Number.MAX_VALUE;

  for (let i = 0; i < A.length - 1; i++) {
    const leftPartArr = A.slice(0, i + 1);
    const rightPartArr = A.slice(i + 1, A.length);

    let diffValue = sumInArray(leftPartArr) - sumInArray(rightPartArr);
    diffValue = Math.abs(diffValue);

    if (diffValue < minDiffValue) {
      minDiffValue = diffValue;
    }
  }

  return minDiffValue;
}

function sumInArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution([3,1,2,4,3]));