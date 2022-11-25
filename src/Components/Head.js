import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Styles.css";

export default function Head() {
  return (
    <div className="main-container">
      <div className="main-document">
        <Header />
      </div>
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
