/**
 * @param {number[][]} grid
 * @return {number}
 */

// Time Limit Exceeded

const minPathSum = function(grid) {
  const rowLength = grid.length;
  const columnLength = grid[0].length;
  let minSum = Number.MAX_VALUE;

  function find(i, j, t) {
    if (t >= minSum) {
      return;
    }

    if (i === rowLength - 1 && j === columnLength - 1) {
      if (t < minSum) {
        minSum = t;
      }
      return;
    }

    if (i + 1 < rowLength) {
      find(i + 1, j, t + grid[i + 1][j]);
    }

    if (j + 1 < columnLength) {
      find(i, j + 1, t + grid[i][j + 1]);
    }
  }

  find(0, 0, grid[0][0]);

  return minSum;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));