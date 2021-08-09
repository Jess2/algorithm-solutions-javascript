/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
  let arr = [1,2];
  for(let i = 2; i < n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n-1];
};

let result = climbStairs(3);
console.log(result);