// Create the chessboard
export const createBoard = () => {
  const arr = [];

  // Creating a two-dimensional array with an object in it and fill with .value: null, .path: []
  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    for (let j = 0; j < 8; j++) {
      arr[i].push({ level: "null", path: [] });
    }
    arr.push(arr[i]);
  }
  return arr;
};
