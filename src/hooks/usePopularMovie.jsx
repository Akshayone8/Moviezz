import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { fetchPopularMovie } from "../utils/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(fetchPopularMovie(json.results));
  };
  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
