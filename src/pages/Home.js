import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const inputsearch = document.querySelector("#inputsearch");
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("le seigneur");
  // const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=a9a4de040c0b6cc49ff8b7e6c3d7a1ee&query=" +
          search +
          "&language=fr-FR"
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="home">
      <Header />
      <div className="search">
        <input
          type="text"
          name="inputsearch"
          id="inputsearch"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Rechercher"
          onClick={(e) => {
            e.preventDefault();
            setSearch(inputsearch.value);
            inputsearch.value = "";
          }}
        />
      </div>
      <ul className="card-container">
        {moviesData &&
          moviesData.map((film) => <Card key={film.id} film={film} />)}
      </ul>
    </div>
  );
};

export default Home;
