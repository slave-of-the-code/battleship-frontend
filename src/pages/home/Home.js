import React, { useEffect, useState } from "react";
import { Board } from "../../components/board/Board";
import { GameRules } from "../../components/gameRules/GameRules";

import { setShipsHide } from "../../apis/board.api";

import "./Home.scss";

export const Home = () => {
  const [data, setData] = useState({
    username: "",
    turns: 0,
  });

  useEffect(() => {
    /** Set ships (hide)
      1 that is 4 spaces long.
      2 that are 3 spaces long.
      3 that are 2 spaces long.
      4 that are 1 space long.
     */
    setShipsHide([4, 3, 3, 2, 2, 2, 1]).then((board) => {
      console.log("BOARD", board);
    });
    return () => {
      // cleanup;
    };
  }, []);

  const onSubmitGoForm = (e) => {
    e.preventDefault();
    console.log("DATA IS", data);
  };
  const onChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="home">
      <div className="home__container">
        <Board></Board>
        <div className="home__container__settings">
          <form onSubmit={onSubmitGoForm}>
            <GameRules data={data} onChangeData={onChangeData}></GameRules>
            <div className="home__start">
              <input
                type="text"
                placeholder="enter your name"
                value={data.username}
                name="username"
                onChange={onChangeData}
              ></input>
              <button type="submit">GO!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
