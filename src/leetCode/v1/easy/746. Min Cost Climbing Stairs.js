/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
  let even = cost[0];
  let odd = cost[1];

  for (let i = 2; i < cost.length; i++) {
    if (i % 2 === 0) {
      even = cost[i] + Math.min(even, odd);
    } else {
      odd = cost[i] + Math.min(even, odd);
    }
  }

  return Math.min(even, odd);
};