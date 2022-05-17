import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

export const MovieContext = createContext();

export const MovieListContext = () => {
  const [movie, setMovie] = useState([
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="movieList">
      <MovieContext.Provider value={[movie, setMovie]}>
        <Nav />
        <AddMovie />
        <Movie />
      </MovieContext.Provider>
    </div>
  );
};
