import React from "react";
import usePopularMovie from "../../hooks/usePopularMovie";

const SecondaryContainer = () => {
  usePopularMovie();
  return (
    <div>
      <h1>Trending Movies</h1>
    </div>
  );
};

export default SecondaryContainer;
