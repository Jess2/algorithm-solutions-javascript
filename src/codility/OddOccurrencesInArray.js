// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numberObj = {};

  for (let i = 0; i < A.length; i++) {
    if (numberObj[A[i]] === undefined) {
      numberObj[A[i]] = 1;
    } else {
      numberObj[A[i]]++;
    }
  }

  for (let key in numberObj) {
    if (numberObj[key] % 2 !== 0) {
      return Number(key);
    }
  }
}

let result = solution([9, 3, 9, 3, 9, 7, 9]);
console.log(result);