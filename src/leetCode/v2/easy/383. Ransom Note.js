/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazine.includes(ransomNote[i])) {
      return false;
    }
    magazine = magazine.replace(new RegExp(ransomNote[i]), '');
  }

  return true;
};

console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
console.log(canConstruct("aa", "ab"));