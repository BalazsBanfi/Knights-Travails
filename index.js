// Create the chessboard
const createBoard = () => {
  return Array(8)
    .fill()
    .map((x) => Array(8).fill(null));
};

const x = [0, 0];
const y = [2, 1]

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
  return { board, level };
};

// Create the board
const board = createBoard();

console.table(board);

const path = knightMoves(x, y);

console.table(board);
console.log(`  > knightMoves([${x}], [${y}])`)
console.log(`=> You made it in ${path.level} moves!  Here's your path: ${path.level});`)