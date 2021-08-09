/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function(mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
  }
  for (let i = 0; i < mat.length; i++) {
    if (mat.length % 2 !== 0 && i === Math.floor(mat.length / 2)) {
      continue;
    }

    sum += mat[i][(mat.length - 1) - i];
  }

  return sum;
};

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]));
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]));
console.log(diagonalSum([[5]]));