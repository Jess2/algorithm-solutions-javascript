/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
  let matchLength = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      matchLength += n / 2;
      n = n / 2;
    } else {
      matchLength += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }

  return matchLength;
};

console.log(numberOfMatches(14));