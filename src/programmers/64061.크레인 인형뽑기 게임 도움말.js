function solution(board, moves) {
  let answer = 0;
  let basketArr = [];

  for (let i = 0; i < moves.length; i++) {
    const index = moves[i] - 1;
    console.log('index', index + 1)

    for (let j = 0; j < board.length; j++) {
      if (board[j][index] !== 0) {
        console.log(j, index, board[j][index])
        basketArr.push(board[j][index]);
        board[j][index] = 0;

        if (basketArr.length > 1 && basketArr[basketArr.length - 1] === basketArr[basketArr.length - 2]) {
          basketArr.pop();
          basketArr.pop();
          answer += 2;
        }
        break;
      }
    }
  }

  return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));