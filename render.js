export const renderPage = (content) => {
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
};
