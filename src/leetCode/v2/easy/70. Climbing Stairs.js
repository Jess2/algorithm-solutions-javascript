/**
 * 조합 문제
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  let waysCount = 0;

  for (let i = 0; i <= n / 2; i++) {
    waysCount += combination(n - i, i);
  }

  function combination(n, r) {
    return factorial(n) / (factorial(n - r) * factorial(r));
  }

  function factorial(num) {
    let resultNum = 1;

    for (let n = 1; n <= num; n++) {
      resultNum *= n;
    }

    return resultNum;
  }

  return waysCount;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));