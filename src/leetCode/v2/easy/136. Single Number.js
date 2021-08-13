/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
      continue;
    }

    return nums[i];
  }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
