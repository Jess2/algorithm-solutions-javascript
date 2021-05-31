/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function(candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let candyUnit = 1;
  let index = 0;

  while (candies !== 0) {
    candies -= candyUnit;
    arr[index++ % num_people] += candyUnit++;

    if (candyUnit > candies) {
      candyUnit = candies;
    }
  }

  return arr;
};

console.log(distributeCandies(10, 3));