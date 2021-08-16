/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let nums2Index = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (nums2Index === nums2.length) {
      break;
    }
    if (nums1[i] === 0) {
      nums1[i] = nums2[nums2Index++];
    }
  }

  nums1.sort((a, b) => {
    return a - b;
  });
};


let nums1 = [-1,0,0,3,3,3,0,0,0]
merge(nums1, 6, [1,2,2], 3)
console.log(nums1); // [-1,0,0,1,2,2,3,3,3]

