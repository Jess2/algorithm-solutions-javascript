/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let segments = s.split(" ");

    segments = segments.filter(segment => {
        return segment !== ''
    });

    return segments.length;
};

let result = countSegments("Hello, my name is John");
console.log(result);