/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function(coordinates) {
  const column = coordinates[0].charCodeAt(0) - 96;
  const row = coordinates[1];

  return (column % 2 !== 0 && row % 2 === 0) || (column % 2 === 0 && row % 2 !== 0);
};

console.log(squareIsWhite("h3"));