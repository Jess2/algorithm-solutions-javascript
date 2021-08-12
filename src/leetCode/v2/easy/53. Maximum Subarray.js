/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxSums = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    let sums = [];

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      sums.push(sum)
    }

    maxSums.push(Math.max.apply(null, sums));
  }

  return Math.max.apply(null, maxSums);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));