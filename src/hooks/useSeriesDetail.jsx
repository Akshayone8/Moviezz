import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { fetchSereisDetail } from "../utils/movieSlice";

const useSeriesDetail = (seriesId) => {
  const dispatch = useDispatch();

  const getPopularSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
      options
    );
    const json = await data.json();
    dispatch(fetchSereisDetail(json));
  };
  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default useSeriesDetail;
