// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxNum = 100000;

  for (let num = 1; num < maxNum; num++) {
    if (A.indexOf(num) === -1) {
      return num;
    }
  }
}

console.log(solution([1, 3, 6, 4, 1, 2]));