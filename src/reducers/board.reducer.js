const initialState = {
  id: 1,
  name: "Pepe",
  fame: false,
};

const boardReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "newName":
      return {
        ...state,
        name: action.payload,
      };

    default:
      break;
  }

  return state;
};

let board = boardReducer();
console.log("state 1", board);

board = boardReducer(initialState, {
  type: "newName",
  payload: "Gustavo",
});

console.log("state 2", board);
