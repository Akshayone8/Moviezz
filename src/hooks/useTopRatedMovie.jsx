import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTopRatedMovie = (getPagination) => {
  const dispatch = useDispatch();

  const getTopRatedMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${getPagination}`,
      options
    );
    const json = await data.json();

    dispatch(fetchTopRatedMovie(json.results));
  };
  useEffect(() => {
    getTopRatedMovie();
  }, [getPagination]);
};

export default useTopRatedMovie;
