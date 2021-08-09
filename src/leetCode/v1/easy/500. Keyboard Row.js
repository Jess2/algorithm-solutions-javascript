/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
  const CHAR_FIRST_ROW = 'qwertyuiop';
  const CHAR_SECOND_ROW = 'asdfghjkl';
  const CHAR_THIRD_ROW = 'zxcvbnm';
  let sameRowWords = [];

  for (let i = 0; i < words.length; i++) {
    let row;
    let isSameRow = true;

    for (let j = 0; j < words[i].length; j++) {
      if (CHAR_FIRST_ROW.includes(words[i].toLowerCase()[j])) {
        if (row && row !== 1) {
          isSameRow = false;
          break;
        }
        row = 1;
      } else if (CHAR_SECOND_ROW.includes(words[i].toLowerCase()[j])) {
        if (row && row !== 2) {
          isSameRow = false;
          break;
        }
        row = 2;
      } else if (CHAR_THIRD_ROW.includes(words[i].toLowerCase()[j])) {
        if (row && row !== 3) {
          isSameRow = false;
          break;
        }
        row = 3;
      }
    }

    if (isSameRow) {
      sameRowWords.push(words[i]);
    }
  }

  return sameRowWords
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));