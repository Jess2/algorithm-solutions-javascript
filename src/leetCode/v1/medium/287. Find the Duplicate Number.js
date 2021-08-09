/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};

console.log(findDuplicate([1,3,4,2,2]));