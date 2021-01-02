/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let zeroCnt = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            zeroCnt++;
            nums.splice(i, 1);
        }
    }

    for (let i = 0; i < zeroCnt; i++) {
        nums.push(0);
    }

    console.log(zeroCnt, nums);
};

moveZeroes([0,1,0,3,12]);