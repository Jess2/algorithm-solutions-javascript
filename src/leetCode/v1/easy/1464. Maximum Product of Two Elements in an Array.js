/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
  nums.sort((a, b) => {
    return b - a;
  });

  return (nums[0] - 1) * (nums[1] - 1);
};

console.log(maxProduct([3,4,5,2]));