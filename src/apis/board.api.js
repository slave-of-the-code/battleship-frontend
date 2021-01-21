const board = {};
const { API_BOARD_SETHIDDENBOATS } = require("../consts/const");

board.setHiddenBoats = async (boatLength) => {
  const hiddenBoats = await (
    await fetch(API_BOARD_SETHIDDENBOATS, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boatLength }),
    })
  ).json();

  return hiddenBoats;
};

module.exports = board;
