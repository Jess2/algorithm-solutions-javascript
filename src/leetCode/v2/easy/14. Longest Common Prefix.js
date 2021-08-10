/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let commonPrefix = '';
  let prefix = strs[0];

  if (strs.length === 1) {
    return prefix;
  }

  for (let k = 0; k < prefix.length; k++) {
    let p = '';
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][k] === prefix[k]) {
        p = prefix[k];
      } else {
        p = '';
        return commonPrefix;
      }
    }
    commonPrefix += p;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["cir","car"]));