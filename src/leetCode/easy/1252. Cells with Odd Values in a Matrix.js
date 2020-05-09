/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
let oddCells = function(n, m, indices) {
  let cells = new Array(n);
  let oddLength = 0;

  // matrix 초기화
  for (let i = 0; i < n; i++) {
    cells[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      cells[i][j] = 0;
    }
  }

  // set matrix
  for (let i = 0; i < indices.length; i++) {
    let ri = indices[i][0];
    let ci = indices[i][1];

    for (let j = 0; j < m; j++) {
      cells[ri][j]++;
    }
    for (let j = 0; j < n; j++) {
      cells[j][ci]++;
    }
  }

  // get odd length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (cells[i][j] % 2 !== 0) {
        oddLength++;
      }
    }
  }

  return oddLength;
};

console.log(oddCells(2,3,[[0,1],[1,1]]));