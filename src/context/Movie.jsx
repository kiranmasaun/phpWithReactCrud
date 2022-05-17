import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Movie = () => {
  const [movie, setMovie] = useContext(MovieContext);

  return (
    <div className="row">
      {movie.map((value) => (
        <div className="col-md-4" key={value.id}>
          <img src={value.posterUrl} />
          <h3>{value.title}</h3>
          <span>({value.year})</span>
        </div>
      ))}
    </div>
  );
};

export default Movie;
