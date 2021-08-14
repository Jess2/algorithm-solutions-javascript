/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let elementMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const elementSize =  elementMap.get(nums[i]);
    elementMap.set(nums[i], elementSize ? elementSize + 1 : 1);
  }

  for (let [key, value] of elementMap) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));