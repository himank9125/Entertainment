import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Head from "./Components/Head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending";
import Movie from "./Components/Movie";
import TVSeries from "./Components/TVSeries";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Head />}>
              <Route index element={<Trending />} />
              <Route path="movie" element={<Movie />} />
              <Route path="tv" element={<TVSeries />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
