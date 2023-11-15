import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPopularSeries } from "../utils/movieSlice";
import { options } from "../utils/constants";

const usepopularSeries = (getPagination) => {
  const dispatch = useDispatch();

  const getPopularSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${getPagination}`,
      options
    );

    const json = await data.json();

    dispatch(fetchPopularSeries(json.results));
  };
  useEffect(() => {
    getPopularSeries();
  }, [getPagination]);
};

export default usepopularSeries;
