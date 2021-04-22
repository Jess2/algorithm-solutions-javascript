/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const a = s.slice(0, s.length / 2);
  const b = s.slice(s.length / 2);

  let aVowelsCount = 0;
  let bVowelsCount = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(a[i])) {
      aVowelsCount++;
    }

    if (vowels.includes(b[i])) {
      bVowelsCount++;
    }
  }

  return aVowelsCount === bVowelsCount;
};

console.log(halvesAreAlike("book"));