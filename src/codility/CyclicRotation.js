// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length < 2) {
    return A;
  }

  let rotatedArray = A;

  for (let i = 0; i < K; i++) {
    let num = rotatedArray.pop();
    rotatedArray.unshift(num);
  }

  return rotatedArray;
}

let result = solution([3, 8, 9, 7, 6], 3);
console.log(result);