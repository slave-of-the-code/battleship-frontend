const board = {};
const { API_BOARD_SETSHIPSHIDE } = require("../consts/const");

board.setShipsHide = async (shipsLength) => {
  const setShips = await (
    await fetch(API_BOARD_SETSHIPSHIDE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shipsLength }),
    })
  ).json();

  return setShips;
};

module.exports = board;
