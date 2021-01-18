const board = {};

board.setShipsHide = async (shipsLength) => {
  const setShips = await (
    await fetch("http://localhost:4200/api/board/setShipsHide", {
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
