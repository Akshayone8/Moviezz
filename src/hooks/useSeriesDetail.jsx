import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useSeriesDetail = (seriesId) => {
  const dispatch = useDispatch();
  const getPopularSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
      options
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getPopularSeries();
  }, []);
  return <div>useSeriesDetail</div>;
};

export default useSeriesDetail;
