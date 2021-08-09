/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
    let resultArr = [];

    for (let i = 0; i <= num; i++) {
        resultArr.push(findRepresent(i.toString(2), 1));
    }

    function findRepresent (str, findStr) {
        const pattern = new RegExp(findStr, "g");
        const results = str.match(pattern) || [];
        return results.length;
    }

    return resultArr;
};

console.log(countBits(5));