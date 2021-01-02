/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    // solution 1
    // for (let i = 0; i < s.length; i++) {
    //     const str = s.slice(0, i) + s.slice(i + 1, s.length);
    //
    //     if (str.indexOf(s[i]) === -1) {
    //         return i;
    //     }
    // }
    //
    // return -1;


    // solution 2
    let map = new Map();

    for (let v of s) {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    }

    for (let [key, value] of map){
        if (value === 1){
            return s.indexOf(key);
        }
    }

    return -1;
};

console.log(firstUniqChar("loveleetcode"));