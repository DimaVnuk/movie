import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6a5696f719e447da99db8d3f2a2db52a&language=ru-RU&page=1&?"
    )
      .then((data) => data.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="home-cont">
      <div className="main-center-block main-center-block_wrap">
        {movie.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="cont-img">
                <img
                  className="img-movie"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
              <div className="cont-btn">
                <button className="title-movie-btn">{movie.title}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
