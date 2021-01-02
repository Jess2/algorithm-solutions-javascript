/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
    const outputArr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            outputArr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            outputArr.push("Fizz");
        } else if (i % 5 === 0) {
            outputArr.push("Buzz");
        } else {
            outputArr.push(i.toString());
        }
    }

    return outputArr;
};

console.log(fizzBuzz(15));