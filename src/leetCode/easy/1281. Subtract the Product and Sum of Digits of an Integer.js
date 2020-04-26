/**
 * @param {number} n
 * @return {number}
 */
let subtractProductAndSum = function(n) {
  let str = n.toString();
  let product = 1;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    product *= Number(str[i]);
    sum += Number(str[i]);
  }

  return product - sum;
};

console.log(subtractProductAndSum(234));