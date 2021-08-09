/**
 * @param {number} num
 * @return {number}
 */
let maximum69Number  = function(num) {
  let numStr = num.toString();

  numStr = numStr.replace('6','9');

  return Number(numStr);
};

console.log(maximum69Number(9669));