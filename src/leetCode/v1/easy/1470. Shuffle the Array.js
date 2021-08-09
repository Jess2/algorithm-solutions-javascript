/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = function(nums, n) {
  let resultArr = [];

  for (let i = 0; i < nums.length / 2; i++) {
    resultArr.push(nums[i]);
    resultArr.push(nums[i + nums.length / 2]);
  }

  return resultArr;
};

console.log(shuffle([2,5,1,3,4,7], 3));