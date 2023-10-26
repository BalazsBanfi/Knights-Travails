// Create the chessboard
const createBoard = () => {
  return Array(8)
    .fill()
    .map((x) => Array(8).fill(null));
};

const start = [0, 0];
const end = [5, 3];

// Possible moves of the Knight
const possibleMoves = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2],
];

const knightMoves = ([startX, startY], [endX, endY]) => {
  let level = 0;
  board[startX][startY] = level;

  while (board[endX][endY] == null) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] == level) {
          possibleMoves.forEach((x) => {
            let tempX = x[0] + i;
            let tempY = x[1] + j;

            if (
              tempX >= 0 &&
              tempX <= 7 &&
              tempY >= 0 &&
              tempY <= 7 &&
              board[tempX][tempY] == null
            ) {
              board[tempX][tempY] = level + 1;
            }
          });
        }
      }
    }
    level++;
  }

  const path = () => {
    let result = [[endX, endY]];
    let downX = endX;
    let downY = endY;
    let step = board[downX][downY];
    console.log("step: ", step);
    while (step > 0) {
      step--;
      possibleMoves.forEach((x) => {
        downX = x[0] + downX;
        downY = x[1] + downY;

        if (
          downX >= 0 &&
          downX <= 7 &&
          downY >= 0 &&
          downY <= 7 &&
          board[downX][downY] == step
        ) {
          result.push([downX, downY]);
        }
      });
    }

    console.log("result: ", result);
    return result;
  };

  return { board, level, path };
};

// Create the board
const board = createBoard();

const moves = knightMoves(start, end);

console.table(board);
console.log(`  > knightMoves([${start}], [${end}])`);
console.log(
  `=> You made it in ${
    moves.level
  } moves!  Here's your path: [${moves.path()}];`
);
