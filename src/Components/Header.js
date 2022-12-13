import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";

export default function Header() {
  const [cls, setCls] = useState("topnav");
  function myFunction() {
    if (cls === "topnav") {
      setCls("topnav responsive");
    } else {
      setCls("topnav");
    }
  }
  return (
    <>
      <div className={cls} id="myTopnav">
        <NavLink to="/">Trending</NavLink>
        <NavLink to="/movie">Movie</NavLink>
        <NavLink to="/tv">TV Shows</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </NavLink>

        <h2>Entertainment Express</h2>
      </div>
    </>
  );
}
