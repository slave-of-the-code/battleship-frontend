/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import "./Languages.scss";

export const Languages = () => {
  const [lang, setLang] = useState("en");

  const onChangeLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="languages">
      <div>
        <input
          type="radio"
          id="sp"
          name="language"
          value="sp"
          checked={lang === "sp"}
          onChange={onChangeLanguage}
        ></input>
        <label htmlFor="sp">SP</label>
      </div>
      <div>
        <input
          type="radio"
          id="en"
          name="language"
          value="en"
          checked={lang === "en"}
          onChange={onChangeLanguage}
        ></input>
        <label htmlFor="en">EN</label>
      </div>
    </div>
  );
};
