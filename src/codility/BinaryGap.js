// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function binaryGap(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let binaryNum = N.toString(2);
  let binaryArray = binaryNum.split('');
  let indexArray = [];
  let maxGap = 0;

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === '1') {
      indexArray.push(i);
    }
  }

  if (indexArray.length < 2) {
    return 0;
  }

  for (let i = 0; i < indexArray.length; i++) {
    if (maxGap < indexArray[i + 1] - indexArray[i]) {
      maxGap = indexArray[i + 1] - indexArray[i];
    }
  }

  return maxGap - 1;
}

let result = binaryGap(1041);
console.log(result);
