import React from "react";

import "./GameRules.scss";

export const GameRules = () => {
  return (
    <div className="gameRules">
      <p>Turns / attempts</p>
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
          <small>
            <em>(infinite)</em>
          </small>
        </div>
        <div>
          <input type="radio" id="medium" name="attempts" value="100"></input>
          <label for="medium">medium</label>
          <small>
            <em>(100)</em>
          </small>
        </div>
        <div>
          <input type="radio" id="hard" name="attempts" value="50"></input>
          <label for="hard">hard</label>
          <small>
            <em>(50)</em>
          </small>
        </div>
      </div>
    </div>
  );
};
