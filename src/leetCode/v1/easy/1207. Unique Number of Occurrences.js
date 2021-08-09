/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = function(arr) {
  let numObj = {};
  let countArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (numObj[arr[i]]) {
      numObj[arr[i]]++;
      continue;
    }
    numObj[arr[i]] = 1;
  }

  for (let key in numObj) {
    countArr.push(numObj[key]);
  }

  let countSet = new Set(countArr);
  return countSet.size === countArr.length;
};

console.log(uniqueOccurrences([1,2,2,1,1,3,1]));