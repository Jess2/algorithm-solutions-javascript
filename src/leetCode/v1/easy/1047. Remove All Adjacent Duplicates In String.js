/**
 * @param {string} S
 * @return {string}
 */
let removeDuplicates = function(S) {
  let arr = S.split('');

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i - 1, 2);
    }
  }

  return arr.join('');
};

console.log(removeDuplicates("abbaca"));