// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort();

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return i + 1;
    }
  }

  return A.length + 1;
}

let result = solution([2, 3, 4, 1]);
console.log(result);