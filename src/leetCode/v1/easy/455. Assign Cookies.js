/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = function(g, s) {
  g.sort((a, b) => {return b - a});
  s.sort((a, b) => {return b - a});

  let count = 0;

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (g[i] <= s[j]) {
        count++;
        s.shift();
        break;
      }
    }
  }
  return count;
};

console.log(findContentChildren([1,2,3,4], [1,1]));
