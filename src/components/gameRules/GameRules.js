import React from "react";

import "./GameRules.scss";

export const GameRules = ({ data, onChangeData }) => {
  return (
    <div className="gameRules">
      <p>Turns / attempts</p>
      <div className="gameRules__customAttempts">
        <input
          type="number"
          placeholder="enter number of attempts"
          min="-1"
          value={data.turns}
          onChange={onChangeData}
          name="turns"
        ></input>
      </div>
      <div className="gameRules__defaultAttempts">
        <div>
          <input
            type="radio"
            id="easy"
            name="turns"
            value="-1"
            onChange={onChangeData}
          ></input>
          <label htmlFor="easy">easy</label>
          <small>
            <em>(infinite)</em>
          </small>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            name="turns"
            value="100"
            onChange={onChangeData}
          ></input>
          <label htmlFor="medium">medium</label>
          <small>
            <em>(100)</em>
          </small>
        </div>
        <div>
          <input
            type="radio"
            id="hard"
            name="turns"
            value="50"
            onChange={onChangeData}
          ></input>
          <label htmlFor="hard">hard</label>
          <small>
            <em>(50)</em>
          </small>
        </div>
      </div>
    </div>
  );
};
