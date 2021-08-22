/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  const intersections = [];

  nums1Set.forEach(num => {
    if (nums2Set.has(num)) {
      intersections.push(num);
    }
  });

  return intersections;
};

console.log(intersection([1,2,2,1], [2,2]));