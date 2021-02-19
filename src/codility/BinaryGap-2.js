// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  let isCounting = false;
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      isCounting = true;

      if (currentCount > maxCount) {
        maxCount = currentCount;
      }

      currentCount = 0;
    }

    if (binary[i] === '0' && isCounting) {
      currentCount++;
    }
  }

  return maxCount;
}

console.log(solution(1041));