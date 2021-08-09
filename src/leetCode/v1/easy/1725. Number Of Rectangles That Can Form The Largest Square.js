/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function(rectangles) {
  let largestSquare = 0;
  let theNumOfLargest = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const size = rectangles[i][0] < rectangles[i][1] ? rectangles[i][0] : rectangles[i][1];

    if (size > largestSquare) {
      largestSquare = size;
      theNumOfLargest = 1;
    } else if (size === largestSquare) {
      theNumOfLargest++;
    }
  }

  return theNumOfLargest;
};

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));