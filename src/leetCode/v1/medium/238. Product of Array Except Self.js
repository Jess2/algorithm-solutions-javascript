/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let productNums = new Array(nums.length).fill(1);
    let allProductNum = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            allProductNum *= nums[i];
        }
    }

    for (let i = 0; i < productNums.length; i++) {
        if (nums.indexOf(0) !== -1) {
            const theOtherNums = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];

            if (theOtherNums.indexOf(0) !== -1) {
                productNums[i] = 0;
            } else {
                productNums[i] = allProductNum;
            }
        } else {
            productNums[i] = allProductNum / nums[i];
        }
    }

    return productNums;
};

console.log(productExceptSelf([0,4,0]));
console.log(productExceptSelf([1,0]));