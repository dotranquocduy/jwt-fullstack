import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact >Home</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Nav;
