/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function(startTime, endTime, queryTime) {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count++;
    }
  }

  return count;
};

console.log(busyStudent([1,2,3], [3,2,7], 4));