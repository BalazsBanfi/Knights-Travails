export const renderPage = (content, start) => {
  let startId = `${start[0]}${start[1]}`;
  let end = [];
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
  const svg = document.createElement("img");
  svg.setAttribute("src", "knight.svg");

  const cells = document.querySelectorAll(".cell");
  cells.forEach((square) => {
    square.addEventListener("click", () => {
      if (start.length < 1 || end.length > 1) {
        start.push(+square.id[0]);
        start.push(+square.id[1]);
        square.appendChild(svg);
        console.log(start);
      } else {
        end.push(+square.id[0]);
        end.push(+square.id[1]);
        console.log(end);
      }
    });
  });

  document.getElementById(startId).appendChild(svg);
};
