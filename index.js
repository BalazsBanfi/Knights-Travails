import { knightMoves } from "./knightMoves.js";
import { renderPage } from "./render.js";

const start = [2, 7];
const end = [6, 3];

const moves = knightMoves(start, end);

const content = document.getElementById("table");

renderPage(content);


/* console:
> knightMoves([2,7], [6,3])
knightMoves.js:49 => You made it in 4 moves!  Here's your path: [[2,7],[1,5],[2,3],[4,2],[6,3]];
*/