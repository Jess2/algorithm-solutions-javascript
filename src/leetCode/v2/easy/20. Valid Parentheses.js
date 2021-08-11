/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const brackets = new Map();
  brackets.set('(', ')');
  brackets.set('{', '}');
  brackets.set('[', ']');

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (brackets.get(s[i])) {
      stack.push(brackets.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("{[]}()"));
console.log(isValid("{[]})"));
console.log(isValid("{["));
console.log(isValid("(([]){})"));