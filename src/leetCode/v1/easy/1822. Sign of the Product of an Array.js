/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function(nums) {
  let product = 1;

  nums.forEach(num => {
    product *= num;
  });

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]));