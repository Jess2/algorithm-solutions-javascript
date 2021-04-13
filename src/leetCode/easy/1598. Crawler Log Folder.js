/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) {
  let step = 0;

  for (let i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case '../':
        if (step > 0) {
          step -= 1;
        }
        break;
      case './':
        break;
      default:
        step += 1;
        break;
    }
  }

  return step;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));