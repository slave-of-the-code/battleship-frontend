import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.scss";

export const Menu = () => {
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink exact to="/GameList" activeClassName="active">Game List</NavLink>
      <NavLink exact to="/ShipSetting" activeClassName="active">Ship Setting</NavLink>
      <NavLink exact to="/BoardSetting/:id" activeClassName="active">Board Setting</NavLink>
    </nav>
  );
};
