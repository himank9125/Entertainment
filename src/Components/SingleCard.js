import React from "react";
let prePath = "https://image.tmdb.org/t/p/w200/";
export default function SingleCard(props) {
  return props.data.map((e, idx) => {
    return (
      <div className="card" style={{ width: 250, height: 600 }} key={idx}>
        <img
          className="card-img-top"
          src={prePath + e.poster_path}
          alt="Card"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <h6>{e.popularity}K Reviews</h6>
          <p className="card-text">Release On {e.release_date}</p>
          <a href="#" className="btn btn-primary stretched-link">
            Watch Now
          </a>
        </div>
      </div>
    );
  });
}
