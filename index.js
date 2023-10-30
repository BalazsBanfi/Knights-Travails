
const start = [0, 0];
const end = [3, 3];
import { knightMoves } from "./knightMoves.js";


// Create the board

const moves = knightMoves(start, end);

//console.table(board);
console.log(`  > knightMoves([${start}], [${end}])`);

console.log(
  `=> You made it in ${moves.levelDef} moves!  Here's your path: ${JSON.stringify(
    moves.board[end[0]][end[1]].path)
  };`
);