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

export const knightMoves = (start, end) => {
  const board = createBoard();

  let levelDef = 0;
  board[start[0]][start[1]].level = levelDef;
  board[start[0]][start[1]].path.push(start);

  while (board[end[0]][end[1]].level == "null") {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j].level == levelDef) {
          possibleMoves.forEach((x) => {
            let temp = [x[0] + i, x[1] + j];

            if (
              temp[0] >= 0 &&
              temp[0] <= 7 &&
              temp[1] >= 0 &&
              temp[1] <= 7 &&
              board[temp[0]][temp[1]].level == "null"
            ) {
              board[temp[0]][temp[1]].level = levelDef + 1;
              board[temp[0]][temp[1]].path = [...board[i][j].path];
              board[temp[0]][temp[1]].path.push([temp[0], temp[1]]);
            }
          });
        }
      }
    }
    levelDef++;
  }
  //console.table(board);
  console.log(`  > knightMoves([${start}], [${end}])`);

  console.log(
    `=> You made it in ${
      levelDef
    } moves!  Here's your path: ${JSON.stringify(
      board[end[0]][end[1]].path
    )};`
  );

  return { board, levelDef };
};
