function jumpingOnClouds(c) {
  let minCount = 0;

  for (let i = 0; i < c.length; i++) {
    if (i !== 0) {
      minCount++;
    }

    if (c[i + 2] === 0) {
      i++;
    }
  }

  return minCount;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));