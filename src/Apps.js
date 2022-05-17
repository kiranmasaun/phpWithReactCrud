import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { MovieListContext } from "./context/MovieContext";

const Apps = () => {
  return (
    <div className="apps">
      <MovieListContext></MovieListContext>
    </div>
  );
};

export default Apps;
