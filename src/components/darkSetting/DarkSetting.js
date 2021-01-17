import React from "react";

import "./DarkSetting.scss";

export const DarkSetting = () => {
  return (
    <div className="darkSetting">
      <input type="checkbox" id="isDark"></input>
      <label htmlFor="isDark">dark</label>
      <br></br>
    </div>
  );
};
