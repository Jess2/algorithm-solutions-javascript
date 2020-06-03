/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
let daysBetweenDates = function(date1, date2) {
  let newDate1 = new Date(date1);
  let newDate2 = new Date(date2);

  let dif = newDate2 - newDate1;
  let cDay = 24 * 60 * 60 * 1000;// 시 * 분 * 초 * 밀리세컨

  return parseInt(Math.abs(dif/cDay));
};

console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
