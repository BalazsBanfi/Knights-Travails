
// Create the chessboard
const createBoard = () => {
  return new Array(8).fill(new Array(8).fill(null));
};

const knightMoves = ([startX, startY], [endX, endY]) => {
  console.log(startX, startY, endX, endY);
  

};

const board = createBoard();
//console.table(board);

const path = knightMoves([0, 0], [2, 1]);
console.log(path);
