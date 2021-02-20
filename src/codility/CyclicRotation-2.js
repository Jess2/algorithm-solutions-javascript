// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return A;
  }

  let rotatedArray = A.slice();

  for (let i = 0; i < K; i++) {
    const LAST_NUM = rotatedArray.pop();
    rotatedArray.unshift(LAST_NUM);
  }

  return rotatedArray;
}

console.log(solution([0], 3));
