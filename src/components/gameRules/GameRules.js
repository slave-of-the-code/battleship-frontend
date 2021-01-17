import React from "react";

import "./GameRules.scss";

export const GameRules = () => {
  return (
    <div className="gameRules">
      <div className="gameRules__customAttempts">
        <input
          type="number"
          placeholder="enter number of attempts"
          min="0"
        ></input>
      </div>
      <div className="gameRules__defaultAttempts">
        <div>
          <input type="radio" id="easy" name="attempts" value="-1"></input>
          <label for="easy">easy</label>
        </div>
        <div>
          <input type="radio" id="medium" name="attempts" value="100"></input>
          <label for="medium">medium</label>
        </div>
        <div>
          <input type="radio" id="hard" name="attempts" value="50"></input>
          <label for="hard">hard</label>
        </div>
      </div>
    </div>
  );
};
