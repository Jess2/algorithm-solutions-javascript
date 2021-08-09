/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray = function(arr1, arr2) {
  let sortedArr = [];

  arr1.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr2.length; i++) {
    let findIndex = arr1.indexOf(arr2[i]);

    if (findIndex === arr1.length - 1) {
      sortedArr = sortedArr.concat(arr1[findIndex]);
    }

    for (let j = findIndex; j < arr1.length; j++) {
      if (arr2[i] !== arr1[j]) {
        sortedArr = sortedArr.concat(arr1.slice(findIndex, j));
        break;
      }
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      sortedArr.push(arr1[i]);
    }
  }

  return sortedArr;
};

console.log(relativeSortArray([33,22,48,4,39,36,41,47,15,45], [22,33,48,4]));