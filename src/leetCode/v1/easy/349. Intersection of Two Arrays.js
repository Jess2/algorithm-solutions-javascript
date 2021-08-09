/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
  let nums1set = new Set(nums1);
  let nums2set = new Set(nums2);
  let resultArr = [];

  nums2set.forEach(num => {
    if (nums1set.has(num)) {
      resultArr.push(num);
    }
  });

  return resultArr;
};

console.log(intersection([1,2,2,1], [2,2]));