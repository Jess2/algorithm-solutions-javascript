/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
  let strCount = {
    "R": 0,
    "L": 0,
  };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    strCount[s[i]]++;
    if (strCount["R"] === strCount["L"]) {
      count++;
      strCount["R"] = 0;
      strCount["L"] = 0;
    }
  }

  return count;
};
console.log(balancedStringSplit("RLRLRRLL"));