/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function(moves) {
  let origin = [0, 0];
  let moveObj = {
    "R": [1, 0],
    "L": [-1, 0],
    "U": [0, 1],
    "D": [0, -1]
  };

  for (let i = 0; i < moves.length; i++) {
    origin[0] += moveObj[moves[i]][0];
    origin[1] += moveObj[moves[i]][1];
  }

  return origin[0] === 0 && origin[1] === 0;
};

console.log(judgeCircle("UD"));