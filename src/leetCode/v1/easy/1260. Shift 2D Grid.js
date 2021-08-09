/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  const gridColumnSize = grid[0].length;
  const arr = grid.flat();
  const newGrid = [];

  for (let i = 0; i < k; i++) {
    const pop = arr.pop();
    arr.unshift(pop);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % gridColumnSize === 0) {
      newGrid.push([]);
    }

    newGrid[newGrid.length - 1].push(arr[i]);
  }

  return newGrid;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1));
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));