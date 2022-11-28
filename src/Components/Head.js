import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Styles.css";
import LazyLoading from "./LazyLoading";

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
