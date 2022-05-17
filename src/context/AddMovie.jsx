import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movie, setMovie] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie([
      ...movie,
      {
        title: name,
        year: year,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        placeholder="Enter Movie Name"
        onChange={handleNameChange}
        value={name}
      />
      <input
        type="year"
        placeholder="Enter Movie Year"
        onChange={handleYearChange}
        value={year}
      />
      <button className="btn btn-primary">Add Movie</button>
    </form>
  );
};

export default AddMovie;
