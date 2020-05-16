/**
 * @param {number[]} heights
 * @return {number}
 */
let heightChecker = function(heights) {
  let originHeights = JSON.parse(JSON.stringify(heights));
  let sortedHeights = heights.sort((a, b) => {
    return a - b;
  });
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (originHeights[i] !== sortedHeights[i]) {
      count++;
    }
  }

  return count;
};

console.log(heightChecker([1,1,4,2,1,3]));