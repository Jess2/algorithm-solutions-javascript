/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
  let discountedPrices = [...prices];

  for (let i = 0; i < prices.length - 1; i++) {
    let subPrices = prices.slice(i + 1);

    for (let j = 0; j < subPrices.length; j++) {
      if (subPrices[j] <= prices[i]) {
        discountedPrices[i] -= subPrices[j];
        break;
      }
    }
  }

  return discountedPrices;
};

console.log(finalPrices([8,4,6,2,3]));