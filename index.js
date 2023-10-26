// Create the chessboard
const createBoard = () => {
  return Array(8)
    .fill()
    .map((x) => Array(8).fill(null));
};

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
  console.log(startX, startY, endX, endY);
  let level = 0;
  //  board[endX][endY] = 110;
  board[startX][startY] = level;

  while (board[endX][endY] == null) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] == level) {
          possibleMoves.forEach((x) => {
            let tempX = x[0] + startX;
            let tempY = x[1] + startY;

            if (tempX >= 0 && tempX <= 7 && tempY >= 0 && tempY <= 7) {
              board[tempX][tempY] = level + 1;
            }
          });
        }
      }
    }
    level++
  }
  return board;
};

// Create the board
const board = createBoard();

console.table(board);

const path = knightMoves([3, 3], [6, 6]);

console.table(board);
