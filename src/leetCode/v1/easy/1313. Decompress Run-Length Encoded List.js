/**
 * @param {number[]} nums
 * @return {number[]}
 */
let decompressRLElist = function(nums) {
  let resultArray = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i]; j++) {
      resultArray.push(nums[i+1]);
    }
    i++;
  }

  return resultArray;
};

console.log(decompressRLElist([1,2,3,4]));