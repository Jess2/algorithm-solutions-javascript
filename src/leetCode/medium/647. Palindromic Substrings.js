/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let palindromicArr = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const str = s.substring(i, j + 1);
            const reverseStr = str.split('').reverse().join('');

            if (str !== '' && str === reverseStr) {
                palindromicArr.push(str);
            }
        }
    }

    return palindromicArr.length;
};

console.log(countSubstrings("aaa"));