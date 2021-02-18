/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let count = 0;

  for (let i = 2; i < n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      count++;
    }
  }
  return count;
};

console.log(countPrimes(2))
// 시간초과