import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Footer from "./Footer";

export default function Trending() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  let FetchData = () => {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=9b6d4484579f620925d5cf5bf1adddcf&page=${page}`;
    let data = fetch(url);
    data
      .then((elm) => {
        return elm.json();
      })
      .then((elm) => {
        setItems(elm.results);
        // console.log(elm.results);
      });
  };
  useEffect(() => {
    FetchData();
  }, [page]);

  return (
    <div>
      <div className="headHeader">
        <h1>Trending</h1>
      </div>
      <hr />
      <div className="hsContent">
        <SingleCard data={items} />
      </div>
      <div className="footcontent">
        <Footer page={page} setPage={setPage} />
      </div>
    </div>
  );
}
