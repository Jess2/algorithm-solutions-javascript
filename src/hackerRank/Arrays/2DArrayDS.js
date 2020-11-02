function hourglassSum(arr) {
  let startI = 0;
  let startJ = 0;
  let maxSum = 0;

  while (true) {
    let sum = 0;
    sum += (arr[startI][startJ] + arr[startI][startJ + 1] + arr[startI][startJ + 2]);
    sum += arr[startI + 1][startJ + 1];
    sum += (arr[startI + 2][startJ] + arr[startI + 2][startJ + 1] + arr[startI + 2][startJ + 2]);

    if (sum > maxSum || (startI === 0 && startJ === 0)) {
      maxSum = sum;
    }

    if (startJ < 3) {
      startJ++;
    } else if (startI < 3) {
      startI++;
      startJ = 0;
    } else {
      return maxSum;
    }
  }
}

console.log(hourglassSum([ [ 0, -4, -6, 0, -7, -6 ], [ -1, -2, -6, -8, -3, -1 ], [ -8, -4, -2, -8, -8, -6 ], [ -3, -1, -2, -5, -7, -4 ], [ -3, -5, -3, -6, -6, -6 ], [ -3, -6, 0, -8, -6, -7] ]));