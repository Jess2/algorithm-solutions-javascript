/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let bracketObj = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (bracketObj[s[i]]) {
      stack.push(bracketObj[s[i]]);
    } else if (s[i] !== stack.pop()) {
      return false;
    }
    console.log(stack)
  }

  return !stack.length;
};

let result = isValid("()[]");
console.log(result);