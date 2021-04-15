/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  let highestAltitude = 0;
  let currentAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];

    if (currentAltitude > highestAltitude) {
      highestAltitude = currentAltitude;
    }
  }

  return highestAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));