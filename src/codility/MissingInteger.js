// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minInt = 1;

  while (1) {
    if (!A.includes(minInt)) {
      return minInt;
    }
    minInt++;
  }
}

let result = solution([1, 3, 6, 4, 1, 2]);
console.log(result);