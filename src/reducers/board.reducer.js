export const boardReducer = (state, action) => {
  switch (action?.type) {
    case "SHOT":
      const newState = [...state];
      newState[action.payload.row][action.payload.col] = {
        state: action.payload.state,
      };
      return newState;

    case "CREATE":
      const rows = action.payload.rows;
      const cols = action.payload.cols;

      let board = new Array(rows);
      for (let r = 0; r < rows; r++) {
        board[r] = new Array(cols);
        for (let c = 0; c < cols; c++) {
          board[r][c] = {
            state: -1,
          };
        }
      }
      return board;

    default:
      break;
  }

  return state;
};
