/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function(matrix) {
  let transposedMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposedMatrix.push(new Array(matrix.length));

    for (let j = 0; j < matrix.length; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1,2,3],[4,5,6]]));