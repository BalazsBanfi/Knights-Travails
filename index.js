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

const knightMoves = (start, end) => {
  let level = 0;
  board[start[0]][start[1]] = [level, start];

  while (board[end[0]][end[1]] == null) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j][0] && board[i][j] == level) {
          possibleMoves.forEach((x) => {
            let temp = [x[0] + i, x[1] + j];

            if (
              temp[0] >= 0 &&
              temp[0] <= 7 &&
              temp[1] >= 0 &&
              temp[1] <= 7 &&
              board[temp[0]][temp[1]] == null
            ) {
              board[temp[0]][temp[1]] = [level + 1, " hh "];
              
            }
          });
        }
      }
    }
    level++;
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

  return { board, level};
};


const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.table(array1);
array1[0][1] = [22, 33, 44]
console.table(array1);
console.log(array1[0][1][2])

// Create the board
const board = createBoard();

const moves = knightMoves(start, end);

console.table(board);
console.log(`  > knightMoves([${start}], [${end}])`);
console.log(
  `=> You made it in ${
    moves.level
  } moves!  Here's your path: [${moves.level}];`
);
