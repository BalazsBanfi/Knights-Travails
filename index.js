// Create the chessboard
const createBoard = () => {
  let arr = [];
  let value = {level: "null"};

  // creating two-dimensional array
  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    for (let j = 0; j < 8; j++) {
      arr[i][j] = value;
    }
  }
  return arr;
}
/*
const createBoard = () => {
  return Array(8)
    .fill()
    .map(() => Array(8).fill({ level: "null" }));
};
*/
const start = [0, 0];
const end = [0, 1];

// Possible moves of the Knight
const possibleMoves = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2]
];

const knightMoves = (start, end) => {
  let levelDef = 0;
  board[start[0]][start[1]].level = levelDef;
  
  while (board[end[0]][end[1]].level == "null") {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j].level == levelDef) {
          console.log("board i j ", i, j, board[i][j].level, levelDef)
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
            }
          });
        }
      }
    }
    levelDef++;
  }

  /*
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
*/

  return { board, levelDef };
};

// Create the board
const board = createBoard();
console.table(board);

const moves = knightMoves(start, end);

//console.table(board);
console.log(`  > knightMoves([${start}], [${end}])`);
/*
console.log(
  `=> You made it in ${moves.levelDef} moves!  Here's your path: [${moves.levelDef}];`
);
console.table(board);*/
