import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const movieList = useSelector((store) => store.movie.bookMarkDetail);
  return <div>Favorite</div>;
};

export default Favorite;
