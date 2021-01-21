const consts = {
  API_BOARD_SETHIDDENBOATS: "http://localhost:4200/api/board/setHiddenBoats",
  ROWS: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  COLS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  SHIP_STATE: {
    INIT: -1,
    WATER: 0,
    TOUCHED: 1,
    SUNKEN: 2,
  },
};

module.exports = consts;
