/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let num = nums.pop();
    nums.unshift(num);
  }
};

let result = rotate([1,2,3,4,5,6,7], 3);
console.log(result);