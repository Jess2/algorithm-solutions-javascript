// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let counterArray = [];
  let maxCounter = 0;

  for (let i = 0; i < N; i++) {
    counterArray[i] = 0;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      for (let j = 0; j < counterArray.length; j++) {
        counterArray[j] = Math.max.apply(null, counterArray);
      }
      continue;
    }
    counterArray[A[i] - 1] += 1;
  }
  return counterArray;
}

let result = solution(1, [1]);
console.log(result);