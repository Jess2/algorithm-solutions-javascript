/**
 * @param {number[][]} grid
 * @return {number}
 */
let countNegatives = function(grid) {
  let negativesCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        negativesCount++;
      }
    }
  }

  return negativesCount;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));