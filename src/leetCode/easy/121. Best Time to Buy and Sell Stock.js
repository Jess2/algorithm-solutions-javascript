/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++) {
    let max = Math.max.apply(null, prices.slice(i+1)) - prices[i];
    if (maxProfit < max) {
      maxProfit = max;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));