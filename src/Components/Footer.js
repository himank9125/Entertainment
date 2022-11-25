import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="topnav">
      <a
        href="#"
        className="previous"
        onClick={() => {
          props.page > 1 && props.setPage(props.page - 1);
        }}
      >
        &laquo; Previous
      </a>
      <a
        href="#"
        className="next"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next &raquo;
      </a>
    </div>
  );
}
