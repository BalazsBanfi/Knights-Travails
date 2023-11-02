import { knightMoves } from "./knightMoves.js";

// Get the table elements by id
const content = document.getElementById("table");
const paragraph = document.getElementById("pathParagraph");
let knightPath = [];

// Object for the chesstable columns
const columns = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
};

const renderMove = (path) => {
  // Iterate the path array and color the cells, add no. to cells
  let result = "";
  for (let i = 1; i < path.length; i++) {
    let actualCell = document.getElementById(`${path[i][0]}${path[i][1]}`);
    actualCell.classList.add("pathCell");
    actualCell.innerHTML = i;
    result += `${i}. B${columns[path[i][1]]}${8 - path[i][0]}, `;
  }
  // Delete last 2 characters of result string
  result = result.slice(0, -2);

  // Write out the moves to the paragraph
  paragraph.innerHTML = `Knight (B) moves: ${columns[path[0][1]]}${
    8 - path[0][0]
  } => ${columns[path[path.length - 1][1]]}${
    8 - path[path.length - 1][0]
  }. You made it in ${path.length - 1} moves!  Here's your path: ${result}`;
};

// Clear the last path
const clearPage = (path) => {
  for (let i = 1; i < path.length; i++) {
    let actualCell = document.getElementById(`${path[i][0]}${path[i][1]}`);
    actualCell.classList.remove("pathCell");
    actualCell.innerHTML = "";
  }
};

export const renderPage = (start = [7, 1]) => {
  // The Knight starting position
  let startId = `${start[0]}${start[1]}`;

  let end = [];

  // Render chessboard with black and white cells
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = document.createElement("div");

      cell.classList.add((i + j) % 2 == 0 ? "whiteCell" : "blackCell");
      cell.classList.add("cell");
      cell.setAttribute("id", `${i}${j}`);
      content.appendChild(cell);
    }
  }

  // Append knight.svg as img
  const svg = document.createElement("img");
  svg.setAttribute("src", "knight.svg");
  svg.setAttribute("alt", "knight");
  document.getElementById(startId).appendChild(svg);

  // Add "click" eventlistener to all 64 cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach((square) => {
    square.addEventListener("click", () => {
      // Set a new path and add the starting and ending coordinates
      if (start.length < 1 || end.length > 1) {
        clearPage(knightPath);
        start.push(+square.id[0]);
        start.push(+square.id[1]);
        square.appendChild(svg);
      } else {
        end.push(+square.id[0]);
        end.push(+square.id[1]);

        //call knightMoves path
        knightPath = knightMoves(start, end).board[end[0]][end[1]].path;
        renderMove(knightPath);
        start = [];
        end = [];
      }
    });
  });
};
