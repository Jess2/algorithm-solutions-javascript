/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function(mat, k) {
  let soldiersCntMap = new Map();
  let weakestRows = [];
  let weakestObj = { key: 0, value: mat[0].length + 1 };

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        soldiersCntMap.set(i, j);
        break;
      }
      soldiersCntMap.set(i, mat[0].length);
    }
  }


  for (let n = 0; n < k; n++) {
    for (let [key, value] of soldiersCntMap) {
      if (value < weakestObj.value) {
        weakestObj = {key, value};
      }
    }

    weakestRows.push(weakestObj.key);
    soldiersCntMap.delete(weakestObj.key);
    weakestObj = { key: 0, value: mat[0].length + 1 };
  }

  return weakestRows;
};

console.log(kWeakestRows([[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]], 3));
console.log(kWeakestRows([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]], 1));
console.log(kWeakestRows([[1,0],[1,0],[1,0],[1,1]], 4));
console.log(kWeakestRows(
  [[1,1,0],[1,1,0],[1,1,1],[1,1,1],[0,0,0],[1,1,1],[1,0,0]], 6));
console.log(kWeakestRows(
  [[1,1,1,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1]], 4));
