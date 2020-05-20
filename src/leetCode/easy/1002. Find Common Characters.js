/**
 * @param {string[]} A
 * @return {string[]}
 */
let commonChars = function(A) {
  let standard = A[0].split('');
  let result = [];

  result = standard.filter(char => {
    for (let i = 1; i < A.length; i++) {
      if (A[i].includes(char)) {
        A[i] = A[i].replace(char, '');
        continue;
      }
      return false;
    }
    return true;
  });

  return result;
};

console.log(commonChars(["bella","label","roller"]));