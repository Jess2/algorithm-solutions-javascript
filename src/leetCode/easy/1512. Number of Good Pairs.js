let solution = function(arr) {
  let pairsCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        pairsCnt++;
      }
    }
  }

  return pairsCnt;
};

console.log(solution([1,2,3,1,1,3]));
