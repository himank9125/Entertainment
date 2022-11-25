import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SingleCard from "./SingleCard";
import Footer from "./Footer";

export default function Search() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("a");
  const [text, setText] = useState("");
  const [type, setType] = useState(true);

  let Search = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setSearchText(text);
    }
  };
  let FetchData = () => {
    let url = `https://api.themoviedb.org/3/search/${
      type ? "tv" : "movie"
    }?api_key=9b6d4484579f620925d5cf5bf1adddcf&language=en-US&query=${searchText}&page=${page}&include_adult=false`;
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
  }, [searchText, page, type]);

  return (
    <div>
      <div className="topnav">
        <NavLink
          style={
            type
              ? {
                  backgroundColor: "#04aa6d",
                  paddingLeft: 90,
                  paddingRight: 90,
                }
              : {
                  backgroundColor: "#f1f1f1",
                  color: "black",
                  paddingLeft: 90,
                  paddingRight: 90,
                }
          }
          onClick={() => {
            setType(true);
          }}
        >
          TV Shows
        </NavLink>
        <NavLink
          style={
            type
              ? {
                  backgroundColor: "#f1f1f1",
                  color: "black",
                  paddingLeft: 90,
                  paddingRight: 90,
                }
              : {
                  backgroundColor: "#04aa6d",
                  paddingLeft: 90,
                  paddingRight: 90,
                }
          }
          onClick={() => {
            setType(false);
          }}
        >
          Movies
        </NavLink>
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search.."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button type="submit" onClick={Search}>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="headHeader">
        <h1>{type ? "Searched TV Shows" : "Searched Movies"}</h1>
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
