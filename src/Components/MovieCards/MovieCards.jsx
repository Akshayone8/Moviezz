import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCards = ({
  title,
  overview,
  poster_path,
  vote_average,
  original_name,
}) => {
  return (
    <div className="card">
      <img alt={title} src={IMG_CDN_URL + poster_path} />

      <div className="card-details">
        <h4>{title ? title : original_name}</h4>
        {Math.floor(vote_average) > 5 ? (
          <span className="tag-green">{Math.floor(vote_average)}</span>
        ) : (
          <span className="tag-red">{Math.floor(vote_average)}</span>
        )}
      </div>
      <div className="movie-overview">
        <h4>Overview:</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCards;
