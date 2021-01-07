/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    const originMatrix = matrix.slice(0);

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(matrix[0].length);

        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = originMatrix[3 - j][i];
        }
    }
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));