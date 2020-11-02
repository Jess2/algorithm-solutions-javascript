let solution = function(n, arr) {
  let resultSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum <= n && sum > resultSum) {
          resultSum = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }

  return resultSum;
};

console.log(solution(500, [93, 181, 245, 214, 315, 36, 185, 138, 216, 295]));
