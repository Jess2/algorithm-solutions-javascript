/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(nums, queries) {
  const newNums = [...nums];
  const resultNums = [];

  for (let i = 0; i < queries.length; i++) {
    newNums[queries[i][1]] += queries[i][0];

    let sum = 0;
    for (let j = 0; j < newNums.length; j++) {
      if (newNums[j] % 2 === 0) {
        sum += newNums[j];
      }
    }

    resultNums.push(sum);
  }

  return resultNums;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));