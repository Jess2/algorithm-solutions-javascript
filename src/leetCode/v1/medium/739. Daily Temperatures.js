/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
    const waitWarmerDays = new Array(T.length).fill(0);

    for (let i = 0; i < T.length; i++) {
        let cnt = 1;
        for (let j = i + 1; j < T.length; j++) {
            if (T[i] < T[j]) {
                waitWarmerDays[i] = cnt;
                break;
            } else {
                cnt++;
            }
        }
    }

    return waitWarmerDays;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));