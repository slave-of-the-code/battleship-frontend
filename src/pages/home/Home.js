import React, { useEffect, useState } from "react";
import { Board } from "../../components/board/Board";
import { GameRules } from "../../components/gameRules/GameRules";
import { setHiddenBoats } from "../../apis/board.api";

import "./Home.scss";

export const Home = () => {
  const [game, setGame] = useState({
    username: "",
    turns: 0,
    hiddenBoats: [],
  });

  const [go, setGo] = useState(false);

  useEffect(() => {
    /** Set ships (hide)
      1 that is 4 spaces long.
      2 that are 3 spaces long.
      3 that are 2 spaces long.
      4 that are 1 space long.
     */
    setHiddenBoats([4, 3, 3, 2, 2, 2, 1]).then((hiddenBoats) => {
      setGame((g) => ({ ...g, hiddenBoats }));
    });
  }, [setGame]);

  const onSubmitGoForm = (e) => {
    e.preventDefault();
    setGo(true);
  };
  const onChangeData = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  return (
    <div className="home">
      <div className="home__container">
        <Board hiddenBoats={game.hiddenBoats} isAvailable={go}></Board>
        <div className="home__container__settings">
          <div
            className={`${go ? "home__container__settings__disabled" : ""}`}
          ></div>
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
