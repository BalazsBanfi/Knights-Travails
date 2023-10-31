import { knightMoves } from "./knightMoves.js";

const renderMove = (path) => {
  console.log("Hahóó", path);

  for (let i = 1; i < path.length; i++) {
    let actualCell = document.getElementById(`${path[i][0]}${path[i][1]}`);
    actualCell.classList.add("cellStep");
    actualCell.innerHTML = i;
  }
};

export const renderPage = (content, start) => {
  // The Knight starting position
  let startId = `${start[0]}${start[1]}`; //TO DO: add static start and clear from index.js

  let end = [];

  // Render chessboard with black and white cells
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = document.createElement("div");
      if ((i + j) % 2 == 0) {
        cell.classList.add("whiteCell");
      } else {
        cell.classList.add("blackCell");
      }
      cell.classList.add("cell");
      cell.setAttribute("id", `${i}${j}`);
      content.appendChild(cell);
    }
  }

  // Add knight.svg as img
  const svg = document.createElement("img");
  svg.setAttribute("src", "knight.svg");

  // Append knight.svg to starting position
  document.getElementById(startId).appendChild(svg);

  // Add "click" eventlistener to all 64 cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach((square) => {
    square.addEventListener("click", () => {
      // Set a new path and add the starting and ending coordinates
      if (start.length < 1 || end.length > 1) {
        start.push(+square.id[0]);
        start.push(+square.id[1]);
        square.appendChild(svg);
      } else {
        end.push(+square.id[0]);
        end.push(+square.id[1]);

        //call knightMoves path
        let knightPath = knightMoves(start, end).board[end[0]][end[1]].path;
        renderMove(knightPath);
      }
    });
  });


};
