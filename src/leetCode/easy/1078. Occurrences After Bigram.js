/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
let findOcurrences = function(text, first, second) {
  let textArr = text.split(' ');
  let resultArr = [];

  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      resultArr.push(textArr[i + 2]);
    }
  }

  return resultArr;
};

console.log(findOcurrences("we will we will rock you", "we", "will"));