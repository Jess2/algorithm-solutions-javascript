/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function(nums) {
  let countArray = [];

  nums.map((num, index) => {
    countArray.push(0);
    nums.map(_num => {
      if (_num < num) {
        countArray[index]++;
      }
    })
  });

  return countArray;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));