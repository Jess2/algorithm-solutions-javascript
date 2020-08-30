function rotLeft(a, d) {
  const rotationCount = d % a.length;
  const arr = [...a, ...a];

  return arr.slice(rotationCount, a.length + rotationCount);
}

console.log(rotLeft([ 1, 2, 3, 4, 5 ], 4));