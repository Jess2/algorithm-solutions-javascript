/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps  = function(num) {
  let count = 0;
  const stepFunc = (num) => {
    count++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    if (num === 0) {
      return count;
    } else {
      return stepFunc(num);
    }
  };
  return stepFunc(num);
};

console.log(numberOfSteps(14));