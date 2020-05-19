/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
let countCharacters = function(words, chars) {
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    let charsArr = chars.split('');
    let isExist = true;

    for (let j = 0; j < words[i].length; j++) {
      let findIndex = charsArr.indexOf(words[i][j]);
      if (findIndex === -1) {
        isExist = false;
        continue;
      }
      charsArr.splice(findIndex, 1);
    }

    if (isExist) {
      length += words[i].length;
    }
  }

  return length;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));