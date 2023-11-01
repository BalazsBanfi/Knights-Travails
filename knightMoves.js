import { createBoard } from "./board.js";

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

// Knightmoves function
export const knightMoves = (start, end) => {
  const board = createBoard();

  // Set starting cell value to ZERO
  let levelDef = 0;
  board[start[0]][start[1]].level = levelDef;
  board[start[0]][start[1]].path.push(start);

  // Try all possible knight moves on table and finally reach the end cell in levelDef steps
  while (board[end[0]][end[1]].level == "null") {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j].level == levelDef) {
          possibleMoves.forEach((x) => {
            let temp = [x[0] + i, x[1] + j];

            // If the targeted cell is empty, add levelDef + 1 as value and push in the walked path
            if (
              temp[0] >= 0 &&
              temp[0] <= 7 &&
              temp[1] >= 0 &&
              temp[1] <= 7 &&
              board[temp[0]][temp[1]].level == "null"
            ) {
              board[temp[0]][temp[1]].level = levelDef + 1;
              board[temp[0]][temp[1]].path = [
                ...board[i][j].path,
                [temp[0], temp[1]],
              ];
            }
          });
        }
      }
    }
    levelDef++;
  }

  return { board };
};
