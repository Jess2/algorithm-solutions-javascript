/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
let buildArray = function(target, n) {
  let arr = new Array(n);
  let resultArr = [];

  for (let i = 0; i < arr.length; i ++) {
    arr[i] = i + 1;
  }

  let index = 0;
  for (let i = 0; index < target.length; i++) {
    if (target[index] === arr[i]) {
      resultArr.push("Push");
      index++;
    } else {
      resultArr.push("Push");
      resultArr.push("Pop");
    }
  }

  return resultArr;
};

console.log(buildArray([1,3],3));