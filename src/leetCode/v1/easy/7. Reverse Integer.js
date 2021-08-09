/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  let isNegative = false;
  let number = x;
  let newNumber = 0;

  if (number < 0) {
    isNegative = true;
    number = Math.abs(number);
  }
  let str = number.toString();
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if (isNegative) {
    newStr = '-' + newStr;
  }

  newNumber = Number(newStr);

  if (newNumber < Math.pow(-2, 31) || Math.pow(2, 31) - 1 < newNumber) {
    return 0;
  } else {
    return newNumber;
  }
};

let result = reverse(123);
console.log(result);
