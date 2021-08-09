/**
 * @param {number} N
 * @return {boolean}
 */
let divisorGame = function(N) {
  let turn = 0;

  while (N > 1) {
    for (let x = 1; x < N; x++) {
      if (N % x === 0)  {
        N = N - x;
        turn += 1;
        break;
      }
    }
  }

  return turn % 2 !== 0;
};

console.log(divisorGame(6));