function oddNumbers(l, r) {
  let resultArr = [];

  for (let n = l; n <= r; n++) {
    if (n % 2 !== 0) {
      resultArr.push(n);
    }
  }

  return resultArr;
}

console.log(oddNumbers(2, 5));