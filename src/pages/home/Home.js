import React, { useEffect, useState } from "react";
import { Board } from "../../components/board/Board";
import { GameRules } from "../../components/gameRules/GameRules";

import "./Home.scss";

export const Home = () => {
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // effect;
    (async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      setData(data);
      console.log("data", data);
    })();

    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Board></Board>
        <div className="home__container__settings">
          <GameRules></GameRules>
          <div className="home__start">
            <input type="text" placeholder="enter your name"></input>
            <button>GO!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
