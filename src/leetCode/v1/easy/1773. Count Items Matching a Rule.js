/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
  const ruleKeys = {
    "type": 0,
    "color": 1,
    "name": 2,
  }
  const index = ruleKeys[ruleKey];
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      count++;
    }
  }

  return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));