/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let result = 0;
  const sArr = s.split('');
  const romanNumerals = new Map();
  romanNumerals.set('I', {value: 1, subtract: null});
  romanNumerals.set('V', {value: 5, subtract: 'I'});
  romanNumerals.set('X', {value: 10, subtract: 'I'});
  romanNumerals.set('L', {value: 50, subtract: 'X'});
  romanNumerals.set('C', {value: 100, subtract: 'X'});
  romanNumerals.set('D', {value: 500, subtract: 'C'});
  romanNumerals.set('M', {value: 1000, subtract: 'C'});

  sArr.forEach((c, index) => {
    const romanNumeral = romanNumerals.get(c);
    const subtract = romanNumeral.subtract;
    result += romanNumeral.value;

    if (index > 0 && sArr[index - 1] === subtract) {
      result -= romanNumerals.get(subtract).value * 2;
    }
  });

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));