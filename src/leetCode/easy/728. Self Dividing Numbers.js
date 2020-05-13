/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = function(left, right) {
  let numbers = [];
  for (let num = left; num <= right; num++) {
    let isSelfDivide = false;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      if (num % Number(numStr[i]) !== 0) {
        isSelfDivide = false;
        break;
      } else {
        isSelfDivide = true;
      }
    }
    if (isSelfDivide) {
      numbers.push(num);
    }
  }

  return numbers;
};

console.log(selfDividingNumbers(1,22));