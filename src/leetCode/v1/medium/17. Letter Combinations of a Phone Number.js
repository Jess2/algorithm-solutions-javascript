/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    let resultArr = [];
    let digitsArr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    if (digits.length === 0) return resultArr;

    resultArr.push("");
    for (let i = 0; i < digits.length; i++){
        let temp = [];
        let digitStr = digitsArr[digits[i]-2];
        for (let j = 0; j < digitStr.length; j++) {
            for (let k = 0; k < resultArr.length; k++){
                temp.push(resultArr[k]+digitStr[j]);
            }
        }
        resultArr = temp;
    }

    return resultArr;
};
let result = letterCombinations("23");
console.log(result);
