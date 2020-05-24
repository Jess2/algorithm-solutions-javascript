/**
 * @param {number[]} arr
 * @return {number[][]}
 */
let minimumAbsDifference = function(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let minDifference = Math.abs(arr[0] - arr[1]);
  let resultArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let difference = Math.abs(arr[i + 1] - arr[i]);

    if (difference < minDifference) {
      minDifference = difference;
      resultArr = [[arr[i], arr[i + 1]]];
    } else if (difference === minDifference) {
      resultArr.push([arr[i], arr[i + 1]]);
    }
  }

  return resultArr;
};

console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));