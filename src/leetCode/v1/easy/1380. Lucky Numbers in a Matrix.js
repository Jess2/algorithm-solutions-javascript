/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) {
  let results = [];

  for (let i = 0; i < matrix.length; i++) {
    let minRowVal = matrix[i][0];
    let minRowIndex = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minRowVal) {
        minRowVal = matrix[i][j];
        minRowIndex = j;
      }
    }

    let maxColumnVal = matrix[0][minRowIndex];

    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][minRowIndex] > maxColumnVal) {
        maxColumnVal = matrix[k][minRowIndex];
      }
    }

    if (minRowVal === maxColumnVal) {
      results.push(minRowVal);
    }
  }

  return results;
};

console.log(luckyNumbers([[3,1,2]]));