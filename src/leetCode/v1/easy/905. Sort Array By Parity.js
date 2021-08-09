/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParity = function(A) {
  let sortArray = [];
  A.map(num => {
    if (num % 2 === 0) {
      sortArray.unshift(num);
    } else {
      sortArray.push(num);
    }
  });

  return sortArray;
};

console.log(sortArrayByParity([1,3,5,0]));