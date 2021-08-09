/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
let canBeEqual = function(target, arr) {
  target.sort();
  arr.sort();

  for (let i = 0; i < target.length; i++) {
    if (target[i] !== arr[i]) {
      return false;
    }
  }

  return true;
};