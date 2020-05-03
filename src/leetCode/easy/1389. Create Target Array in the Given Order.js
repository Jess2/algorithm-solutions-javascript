/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
let createTargetArray = function(nums, index) {
  let targetArray = new Array(nums.length);

  for (let i = 0; i < targetArray.length; i++) {
    targetArray[index[i]] = nums[i];
  }
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));