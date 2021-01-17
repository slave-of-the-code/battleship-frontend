import React from "react";

import "./Board.scss";

export const Board = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="board">
      <ul className="board__container">
        {rows.map((rowValue, rowIndex) => {
          return (
            <li>
              {cols.map((colValue, colIndex) => {
                return (
                  <button className="board__container__box">{`${rowValue}${colValue}`}</button>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
