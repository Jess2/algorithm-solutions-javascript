/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
  let romanObj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let strArray = s.split('');
  let result = 0;

  for (let i = 0; i < strArray.length; i++) {
    if ((strArray[i] === 'I' && (strArray[i + 1] === 'V' || strArray[i + 1] === 'X'))
      || (strArray[i] === 'X' && (strArray[i + 1] === 'L' || strArray[i + 1] === 'C'))
      || (strArray[i] === 'C' && (strArray[i + 1] === 'M' || strArray[i + 1] === 'D'))) {

      result += romanObj[strArray[i + 1]] - romanObj[strArray[i]];
      i++;
      continue;
    }
    result += romanObj[strArray[i]];
  }

  return result;
};
let result = romanToInt("IX");
console.log(result);