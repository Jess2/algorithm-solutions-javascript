/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function(lowLimit, highLimit) {
  let boxNumberMap = new Map();
  let maxNumber = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    const digits = i.toString().split('');
    let sum = 0;

    for (let j = 0; j < digits.length; j++) {
      sum += Number(digits[j]);
    }

    if (boxNumberMap.has(sum)) {
      boxNumberMap.set(sum, boxNumberMap.get(sum) + 1)
    } else {
      boxNumberMap.set(sum, 1)
    }
  }

  for (let [key, value] of boxNumberMap) {
    if (value > maxNumber) {
      maxNumber = value;
    }
  }

  return maxNumber;
};

console.log(countBalls(1, 10));