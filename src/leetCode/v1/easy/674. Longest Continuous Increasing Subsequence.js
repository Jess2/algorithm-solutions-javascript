/**
 * @param {number[]} nums
 * @return {number}
 */
let findLengthOfLCIS = function(nums) {
  let longLength = 1;
  let maxLongLength = 1;

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 0) {
      longLength++;
      if (longLength > maxLongLength) {
        maxLongLength = longLength;
      }
    } else {
      longLength = 1;
    }
  }

  return maxLongLength;
};

console.log(findLengthOfLCIS([1,3,5,4,7]));