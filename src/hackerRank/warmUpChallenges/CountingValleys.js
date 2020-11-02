function countingValleys(n, s) {
  const pathArr = s.split('');
  let level = 0;
  let valleyCount = 0;

  pathArr.forEach(path => {
    switch (path) {
      case 'U':
        level++;
        break;
      case 'D':
        level--;
        if (level === -1) {
          valleyCount++;
        }
        break;
      default:
        break;
    }
  });

  return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));