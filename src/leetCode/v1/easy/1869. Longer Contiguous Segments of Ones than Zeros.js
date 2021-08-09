/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function(s) {
  let lengthOfNum = new Map();
  let largestLengthOfNum = new Map();
  lengthOfNum.set('0', 0);
  lengthOfNum.set('1', 0);
  largestLengthOfNum.set('0', 0);
  largestLengthOfNum.set('1', 0);

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === s[i]) {
      lengthOfNum.set(s[i], lengthOfNum.get(s[i]) + 1);
    } else {
      lengthOfNum.set(s[i], 1);
    }

    if (lengthOfNum.get(s[i]) > largestLengthOfNum.get(s[i])) {
      largestLengthOfNum.set(s[i], lengthOfNum.get(s[i]));
    }
  }

  return largestLengthOfNum.get('1') > largestLengthOfNum.get('0');
};

console.log(checkZeroOnes('1101'));
console.log(checkZeroOnes('1'));
console.log(checkZeroOnes('10'));