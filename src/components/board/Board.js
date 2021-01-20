import React, { useEffect, useReducer } from "react";
import { boardReducer } from "../../reducers/board.reducer";
import { ROWS, COLS, SHIP_STATE } from "../../consts/const";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faBomb,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

import "./Board.scss";

const initialState = [];

export const Board = ({ hiddenBoats }) => {
  const [board, dispatch] = useReducer(boardReducer, initialState);

  useEffect(() => {
    const action = {
      type: "CREATE",
      payload: {
        rows: ROWS.length,
        cols: COLS.length,
      },
    };
    dispatch(action);
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [board]);

  const setCurrentPosition = (posRow, posCol) => {
    const action = {
      type: "SHOT",
      payload: {
        state: Math.floor(Math.random() * 3),
        row: posRow,
        col: posCol,
      },
    };
    dispatch(action);
  };

  return (
    <div className="board">
      <ul className="board__container">
        {board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <button
                    key={colIndex}
                    className="board__container__box"
                    onClick={() => setCurrentPosition(rowIndex, colIndex)}
                  >
                    {(() => {
                      switch (col.state) {
                        case SHIP_STATE.WATER:
                          return (
                            <FontAwesomeIcon
                              icon={faWater}
                              style={{ color: "cyan" }}
                            />
                          );
                        case SHIP_STATE.TOUCHED:
                          return (
                            <FontAwesomeIcon
                              icon={faBomb}
                              style={{ color: "black" }}
                            />
                          );
                        case SHIP_STATE.SUNKEN:
                          return (
                            <FontAwesomeIcon
                              icon={faSkullCrossbones}
                              style={{ color: "red" }}
                            />
                          );

                        default:
                          return (
                            <span>{[ROWS[rowIndex], colIndex].join("")}</span>
                          );
                      }
                    })()}
                  </button>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
