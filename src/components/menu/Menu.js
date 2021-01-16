import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

export const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/" className="--selected">
        Home
      </Link>
      <Link to="/GameList">Game List</Link>
      <Link to="/ShipSetting">Ship Setting</Link>
      <Link to="/BoardSetting/:id">Board Setting</Link>
    </nav>
  );
};
