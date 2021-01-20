import React, { useEffect, useState } from "react";
import { Board } from "../../components/board/Board";
import { GameRules } from "../../components/gameRules/GameRules";
import { setShipsHide } from "../../apis/board.api";

import "./Home.scss";
export const Home = () => {
  const [game, setGame] = useState({
    username: "",
    turns: 0,
    board: [],
  });
  const [go, setGo] = useState(false);

  useEffect(() => {
    /** Set ships (hide)
      1 that is 4 spaces long.
      2 that are 3 spaces long.
      3 that are 2 spaces long.
      4 that are 1 space long.
     */
    setShipsHide([4, 3, 3, 2, 2, 2, 1]).then((board) => {
      setGame({ ...game, board });
      console.log("HIDDEN BOATS", board);
    });
  }, [setGame]);

  const onSubmitGoForm = (e) => {
    e.preventDefault();
    // TODO :
    // - disable settings
    // enable board
    setGo(true); // aplicar comportamiento para habilitar/deshabilitar board and settings
  };
  const onChangeData = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  return (
    <div className="home">
      <div className="home__container">
        <Board></Board>
        <div className="home__container__settings">
          <form onSubmit={onSubmitGoForm}>
            <GameRules data={game} onChangeData={onChangeData}></GameRules>
            <div className="home__start">
              <input
                type="text"
                placeholder="enter your name"
                value={game.username}
                name="username"
                onChange={onChangeData}
              ></input>
              <button type="submit">GO!</button>
            </div>
          </form>
          {/* <div>shots : {tableBoard.shots}</div> */}
        </div>
      </div>
    </div>
  );
};
