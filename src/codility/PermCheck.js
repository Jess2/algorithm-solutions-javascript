// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort();
  return A[A.length - 1] === A.length ? 1 : 0;
}

let result = solution([2]);
console.log(result);