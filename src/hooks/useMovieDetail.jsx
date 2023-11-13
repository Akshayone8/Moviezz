import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../utils/movieSlice";

const useMovieDetail = (movieId) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const json = await data.json();
    dispatch(fetchMovieDetail(json));
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetail;
