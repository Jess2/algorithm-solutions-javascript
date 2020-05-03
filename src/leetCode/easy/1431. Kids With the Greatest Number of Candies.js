/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let kidsWithCandies = function(candies, extraCandies) {
  let maxCount = Math.max.apply(null, candies);
  let resultArr = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies < maxCount) {
      resultArr[i] = false;
      continue;
    }
    resultArr[i] = true;
  }

  return resultArr;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));