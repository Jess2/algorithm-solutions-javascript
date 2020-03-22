// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let marks = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      if (!marks.includes(A[i])) {
        marks.push(A[i]);
      }
      if (marks.length === X) {
        return i;
      }
    }
  }
  return -1;
}

let result = solution(5, [1,3,1,4,2,3,5,4]);
console.log(result);