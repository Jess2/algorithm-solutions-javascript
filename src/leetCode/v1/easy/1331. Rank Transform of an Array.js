/**
 * @param {number[]} arr
 * @return {number[]}
 */
let arrayRankTransform = function(arr) {
  let sortedArr = JSON.parse(JSON.stringify(arr)).sort((a, b) => {return a - b});
  let resultArr = [];
  let sortedObj = {};
  let rank = 1;

  console.log(sortedArr, arr)

  sortedArr.forEach(num => {
    if (!sortedObj[num]) {
      sortedObj[num] = rank++;
    }
  });

  arr.forEach(num => {
    resultArr.push(sortedObj[num]);
  });

  return resultArr;
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));