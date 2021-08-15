/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
  let ans = [];

  for (let i = 0; i <= num; i++) {
    const binary = i.toString(2);
    ans.push(binary.split('').filter(binaryChar => {
      return binaryChar === '1';
    }).length);
  }

  return ans;
};

console.log(countBits(5));
