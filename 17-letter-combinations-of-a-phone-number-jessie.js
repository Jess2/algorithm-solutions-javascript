/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    let resultArr = [];
    let digitsArr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    if (digits.length === 0) return resultArr;

    resultArr.push("");
    for (let i = 0; i < digits.length; i++){ // digits.length === 2
        let temp = [];
        let digitStr = digitsArr[digits[i]-2]; // i : 0 -> 2 -> "abc", i : 1 -> 3 -> "def"
        for (let j = 0; j < digitStr.length; j++){ // digitStr.length === 3
            for (let k = 0; k < resultArr.length; k++){
                temp.push(resultArr[k]+digitStr[j]); // "" + a,
            }
        }
        console.log(temp)
        resultArr = temp;
    }

    return resultArr;
};
let result = letterCombinations("23");
console.log(result);
