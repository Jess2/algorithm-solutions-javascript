/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    }).reverse();

    nums = nums.filter((num, index, array) => {
        return index === 0 || (index > 0 && array[index - 1] !== array[index]);
    });

    if (nums.length < 3) {
        return nums[0];
    } else {
        return nums[2];
    }
};

let result = thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]);
console.log(result);
