/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = function(nums, S) {
  let wayCount = 0;

  function find(index, t) {
    if (index >= nums.length) {
      if (t === S) {
        wayCount++;
      }
      return;
    }

    find(index + 1, t - nums[index]);
    find(index + 1, t + nums[index]);
  }

  find(0,0);

  return wayCount;
};

console.log(findTargetSumWays([1,1,1,1,1], 3));