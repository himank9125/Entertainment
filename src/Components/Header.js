import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";

export default function Header() {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/">Trending</NavLink>
      <NavLink to="/movie">Movie</NavLink>
      <NavLink to="/tv">TV Shows</NavLink>
      <NavLink to="/search">Search</NavLink>
      <h2>Entertainment Express</h2>
    </div>
  );
}
