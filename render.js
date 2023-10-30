export const renderPage = (content) => {
  const starting = document.getElementById("starting");
  const goal = document.getElementById("goal");
  const random = document.getElementById("random");
  const ride = document.getElementById("ride");
  const clear = document.getElementById("clear");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = document.createElement("div");
      if ((i + j) % 2 == 0) {
        cell.classList.add("blackCell");
      } else {
        cell.classList.add("whiteCell");
      }
      cell.classList.add("cell");
      cell.setAttribute("id", `${i}${j}`);
      content.appendChild(cell);
    }
  }
  const svg = document.createElement("img");
  svg.setAttribute("src", "knight.svg");

  document.getElementById("01").appendChild(svg);
};
