/**
 * @param {number[]} arr
 * @return {number}
 */
let findLucky = function(arr) {
  let map = new Map();
  let luckyArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  for (let [key, value] of map) {
    if (key === value) {
      luckyArr.push(value);
    }
  }

  return luckyArr.length > 0 ? Math.max.apply(null, luckyArr) : -1;
};

console.log(findLucky([4,3,2,2,4,1,3,4,3]));