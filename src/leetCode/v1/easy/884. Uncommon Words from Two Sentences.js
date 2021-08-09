/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
let uncommonFromSentences = function(A, B) {
  let words = A.split(' ').concat(B.split(' '));
  let object = new Map();
  let reseultArr = [];

  words.forEach(word => {
    if (object.get(word)) {
      object.set(word, Number(object.get(word)) + 1);
    } else {
      object.set(word, 1);
    }
  });

  for (let [key, value] of object) {
    if (value === 1) {
      reseultArr.push(key);
    }
  }

  return reseultArr;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));