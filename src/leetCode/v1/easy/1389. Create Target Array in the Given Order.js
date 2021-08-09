/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
let createTargetArray = function(nums, index) {
  let targetArray = [];

  for (let i = 0; i < nums.length; i++) {
    let insertIndex = index[i];
    targetArray.splice(insertIndex, 0, nums[i]);
  }

  return targetArray;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));