/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};

let result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(result);