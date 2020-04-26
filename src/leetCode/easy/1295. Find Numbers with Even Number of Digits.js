/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumbers = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      result++;
    }
  }
  return result;
};

console.log(findNumbers([12,345,2,6,7896]));