/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function(n, k) {
  const digitsStr = n.toString(k);
  let sum = 0;

  for (let i = 0; i < digitsStr.length; i++) {
    sum += Number(digitsStr[i]);
  }

  return sum;
};

console.log(sumBase(34, 6));