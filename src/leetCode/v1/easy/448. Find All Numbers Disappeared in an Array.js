/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function(nums) {
  let resultArr = [];

  for (let num = 1; num <= nums.length; num++) {
    if (!nums.includes(num)) {
      resultArr.push(num);
    }
  }

  return resultArr;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));