/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  let uniqueSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = nums.reduce((cnt, num) => cnt + (num === nums[i]), 0)

    if (count === 1) {
      uniqueSum += nums[i];
    }
  }

  return uniqueSum;
};

console.log(sumOfUnique([1,2,3,2]));