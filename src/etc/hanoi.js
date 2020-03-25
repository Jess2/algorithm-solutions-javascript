let hanoi = (n, from, temp, to) => {
  if(n===1) console.log(`${n}을 ${from}에서 ${to}로 이동`);
  else {
    hanoi(n-1, from, to, temp);
    console.log(`${n}을 ${from}에서 ${to}로 이동`);
    hanoi(n-1, temp, from, to);
  }
}

hanoi(5, 'A', 'B', 'C');