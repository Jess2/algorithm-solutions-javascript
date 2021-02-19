/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

console.log(interpret("(al)G(al)()()G"));