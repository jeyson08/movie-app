import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ film }) => {
  const ids = film.genre_ids;
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=a9a4de040c0b6cc49ff8b7e6c3d7a1ee"
      )
      .then((res) => setGenreData(res.data.genres));
  }, []);

  function getGenreNameById(id) {
    const genre = genreData.find((genre) => genre.id === id);
    return genre ? genre.name : "Unknown";
  }

  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/original/" + film.poster_path}
        alt={film.title}
      />
      <h1>{film.title}</h1>
      <p className="sortie">Sorti le : {film.release_date}</p>
      <p className="note">{Math.round(film.vote_average * 10) / 10} / 10 ⭐️</p>
      <ul className="genre">
        {ids.map((id) => (
          <li key={id}>{getGenreNameById(id)}</li>
        ))}
      </ul>
      <h2>Synopsis</h2>
      <p className="resume">{film.overview}</p>
      <button>Ajouter aux coups de coeurs</button>
    </div>
  );
};

export default Card;
