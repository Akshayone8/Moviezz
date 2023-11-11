import React, { useEffect, useState } from "react";
import { options } from "../../utils/constants";

const Jumbotron = () => {
  const [showTrailer, setShowTrailer] = useState();

  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/872585/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log(json.results.filter((items) => items.type === "Trailer"));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
  return <div>Testing Jumbotron</div>;
};

export default Jumbotron;
