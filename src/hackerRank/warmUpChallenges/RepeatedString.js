function repeatedString(s, n) {
  const REGEX = new RegExp('a', 'g');
  const COUNT_UNIT = s.match(REGEX) ? s.match(REGEX).length : 0;
  let count = COUNT_UNIT * Math.floor(n / s.length);
  const REMAIN_STR = s.substring(0, n % s.length);
  count += REMAIN_STR.match(REGEX) ? REMAIN_STR.match(REGEX).length : 0;

  return count;
}

console.log(repeatedString('bca', 23));
