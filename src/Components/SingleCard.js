import React from "react";
import NA from "./NA.png";
let prePath = "https://image.tmdb.org/t/p/w300/";
export default function SingleCard(props) {
  return props.data.map((e, idx) => {
    return (
      <div className="card" style={{ width: 250, height: 600 }} key={idx}>
        <img
          className="card-img-top"
          src={e.poster_path ? prePath + e.poster_path : NA}
          alt="Card"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <h6>{e.popularity}K Reviews</h6>
          <p className="card-text">
            {e.release_date ? e.release_date : e.first_air_date}
          </p>
          <a href="#" className="btn btn-primary stretched-link">
            Watch Now
          </a>
        </div>
      </div>
    );
  });
}
