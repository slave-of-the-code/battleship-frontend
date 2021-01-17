/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Languages.scss";

export const Languages = () => {
  return (
    <div className="languages">
      <div>
        <input type="radio" id="sp" name="language" value="sp"></input>
        <label for="sp">SP</label>
      </div>
      <div>
        <input type="radio" id="en" name="language" value="en" checked></input>
        <label for="en">EN</label>
      </div>
    </div>
  );
};
