function solution(v) {
    let answer = [];

    let xArr = [];
    let yArr = [];

    for (let i = 0; i < v.length; i++) {
        if (xArr.indexOf(v[i][0]) === -1) {
            xArr.push(v[i][0]);
        } else {
            const index = xArr.indexOf(x[i][0]);
            xArr.splice(index, 1);
        }

        if (yArr.indexOf(v[i][1]) === -1) {
            yArr.push(v[i][1]);
        } else {
            const index = yArr.indexOf(x[i][1]);
            yArr.splice(index, 1);
        }
    }

    console.log(xArr, yArr)
//     answer.push(xArr[0]);
//     answer.push(yArr[0]);

    return answer;
}

console.log([[1, 4], [3, 4], [3, 10]])