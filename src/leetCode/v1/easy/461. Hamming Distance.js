/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function(x, y) {
  let bitXArray = x.toString(2).split('');
  let bitYArray = y.toString(2).split('');
  let count = 0;

  while (bitXArray.length < bitYArray.length) {
    bitXArray.unshift("0");
  }

  while (bitXArray.length > bitYArray.length) {
    bitYArray.unshift("0");
  }


  for (let i = 0; i < bitXArray.length; i++) {
    if (bitXArray[i] !== bitYArray[i]) {
      count++;
    }
  }

  return count;
};

console.log(hammingDistance(1,4));