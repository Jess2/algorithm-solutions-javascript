/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const reversedArr = x.toString().split('').reverse();
  let result;

  if (reversedArr.includes('-')) {
    reversedArr.pop();
    reversedArr.unshift('-')
  }

  result = Number(reversedArr.join(''));

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
