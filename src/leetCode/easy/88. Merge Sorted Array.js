/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums2.map(num => {
    nums1.push(num);
  });
  nums1.sort((a, b) => {
    return a - b;
  });
  console.log(nums1, nums2)
};

merge([0], 0, [1], 1);