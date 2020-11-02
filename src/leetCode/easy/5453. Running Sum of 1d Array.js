/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function(nums) {
  let resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = 0; j <= i; j++) {
      sum += nums[j];
    }

    resultArr.push(sum);
  }

  return resultArr;
};

console.log(runningSum([1,2,3,4]));