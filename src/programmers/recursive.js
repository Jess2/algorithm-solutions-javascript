function solution(numbers, target) {
  let answer = 0;
  dfs(0);

  function dfs(k) {
    if (k === numbers.length) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];

      if (sum === target)
        answer++;

      return;
    }
    else {
      dfs(k + 1);

      numbers[k] *= -1;
      dfs(k + 1);
    }
  }

  return answer;
}

console.log(`solution: ${solution([1, 1, 1, 1, 1], 3)}`); // 5