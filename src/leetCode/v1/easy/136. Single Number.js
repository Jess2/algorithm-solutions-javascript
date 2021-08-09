/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
};

let result = singleNumber([4,1,2,1,2]);
console.log(result);