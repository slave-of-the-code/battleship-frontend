import { ROWS, SHIP_STATE } from "../consts/const";

export const boardReducer = (state, action) => {
  switch (action?.type) {
    case "SHOT":
      const posRow = action.payload.row;
      const posCol = action.payload.col;
      const hiddenBoats = action.payload.hiddenBoats;

      const board = [...state];
      if (board[posRow][posCol] !== SHIP_STATE.INIT) {
        const newState = validateShot(posRow, posCol, hiddenBoats);
        board[posRow][posCol] = {
          state: newState,
        };
      }

      return board;

    case "CREATE":
      const rows = action.payload.rows;
      const cols = action.payload.cols;

      let stateCreated = new Array(rows);
      for (let r = 0; r < rows; r++) {
        stateCreated[r] = new Array(cols);
        for (let c = 0; c < cols; c++) {
          stateCreated[r][c] = {
            state: -1,
          };
        }
      }
      return stateCreated;

    default:
      break;
  }

  return state;
};

function validateShot(posRow, posCol, hiddenBoats) {
  let state = SHIP_STATE.WATER;
  const pos = [ROWS[posRow], posCol + 1].join("");

  hiddenBoats.forEach((b) => {
    const { boat } = b;

    if (boat.indexOf(pos) >= 0) state = SHIP_STATE.TOUCHED;
  });

  return state;
}
