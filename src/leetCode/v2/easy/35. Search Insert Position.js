/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  }

  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      return i;
    } else if (nums[i] < target && target < nums[i + 1]) {
      return i + 1;
    }
  }

  return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1], 0));