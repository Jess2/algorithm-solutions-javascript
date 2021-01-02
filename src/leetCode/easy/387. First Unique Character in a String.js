/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        const str = s.slice(0, i) + s.slice(i + 1, s.length);

        if (str.indexOf(s[i]) === -1) {
            return i;
        }
    }

    return -1;
};

console.log(firstUniqChar("loveleetcode"));