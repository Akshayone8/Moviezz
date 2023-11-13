import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import { useSelector } from "react-redux";
import { IMG_CDN_URL_COVER, IMG_CDN_URL } from "../../utils/constants";
import "../../Styles/MovieDetail/MovieDetail.scss";
import { Container } from "@mui/material";
import Shimmer from "../Shimmer/Shimmer";

const MovieDetail = () => {
  const { movieId } = useParams();
  useMovieDetail(movieId);
  const getMovieDetails = useSelector((store) => store.movie.movieDetail);
  console.log(getMovieDetails);
  if (!getMovieDetails) return <Shimmer />;
  const { backdrop_path, title, poster_path, overview } = getMovieDetails;
  return (
    <div className="moviesection">
      <img
        alt={title}
        src={IMG_CDN_URL_COVER + backdrop_path}
        className="movie-herosection"
      />
      <Container>
        <div className="detail-section">
          <div>
            <img
              alt={title}
              src={IMG_CDN_URL + poster_path}
              className="poster-image"
            />
          </div>

          <div className="information-section">
            <span className="heading">{title}</span>
            <section className="summary">
              <h4 className="summary-title">Summary:</h4>
              <p className="summary-content">{overview}</p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetail;
