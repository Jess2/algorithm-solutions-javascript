/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortedSquares = function(A) {
  let squaresA = A.map(num => {
    return num**2
  });

  squaresA.sort((a, b) => {
    return a - b;
  });

  return squaresA;
};

console.log(sortedSquares([-4,-1,0,3,10]));