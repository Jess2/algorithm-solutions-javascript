/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
  let ransomNoteArr = ransomNote.split('');
  let magazineArr = magazine.split('');

  for (let i = 0; i < ransomNoteArr.length; i++) {
    let index = magazineArr.indexOf(ransomNoteArr[i]);
    if (index === -1) {
      return false;
    } else {
      magazineArr.splice(index, 1);
    }
  }

  return true;
};

console.log(canConstruct("aa", "ba"));