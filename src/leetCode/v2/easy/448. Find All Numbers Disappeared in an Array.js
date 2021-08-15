/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  let disappearedNums = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      disappearedNums.push(i);
    }
  }

  return disappearedNums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));