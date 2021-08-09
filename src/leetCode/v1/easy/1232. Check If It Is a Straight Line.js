/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
let checkStraightLine = function(coordinates) {
  coordinates.sort();

  function checkSameLine () {
    let isSameX = true;
    let isSameY = true;
    for (let i = 0; i < coordinates.length - 1; i++) {
      if (coordinates[i][0] !== coordinates[i + 1][0]) {
        isSameX = false;
      }
      if (coordinates[i][1] !== coordinates[i + 1][1]) {
        isSameY = false;
      }
    }

    return isSameX || isSameY;
  }

  if (checkSameLine()) {
    return true;
  } else {
    let x = coordinates[1][0] - coordinates[0][0];
    let y = coordinates[1][1] - coordinates[0][1];
    let a = y / x;

    for (let i = 1; i < coordinates.length - 1; i++) {
      let _x = coordinates[i + 1][0] - coordinates[i][0];
      let _y = coordinates[i + 1][1] - coordinates[i][1];
      let _a = _y / _x;

      if (_a !== a) {
        return false;
      }
    }

    return true;
  }
};

console.log(checkStraightLine([[0,1],[1,3],[-4,-7],[5,11]]));