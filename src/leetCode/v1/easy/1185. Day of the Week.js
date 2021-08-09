/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
let dayOfTheWeek = function(day, month, year) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let date = new Date(year+'-'+month+'-'+day);
  let dayNum = date.getDay();

  return days[dayNum];
};

console.log(dayOfTheWeek(31, 8, 2019));