// Create the chessboard
const createBoard = () => {
  return Array(8)
    .fill()
    .map((x) => Array(8).fill(null));
};

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
  board[startX][startY] = 0;
  console.log(board[startX][startY], startX, startY, endX, endY);
};

const board = createBoard();
console.table(board);
board[1][3] = 8;

const path = knightMoves([1, 3], [5, 4]);

console.table(board);
