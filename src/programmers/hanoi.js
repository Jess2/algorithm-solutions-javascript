function solution (n) {
  const answer = [];

  function hanoi (n, from, to) {
    const by = 6-from-to;

    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n-1, from, by);
      answer.push([from, to]);
      hanoi(n-1, by, to);
    }
  }
  hanoi(n, 1, 3); // n개의 원판을 1번 기둥에서 3번 기둥으로 옮긴
다
  return answer;
}

let result = solution(5);
console.log(result);