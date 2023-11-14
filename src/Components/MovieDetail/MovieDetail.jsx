import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import { useSelector } from "react-redux";
import {
  IMG_CDN_URL_COVER,
  IMG_CDN_URL,
  YOUTUBE_LINK,
} from "../../utils/constants";
import "../../Styles/MovieDetail/MovieDetail.scss";
import { Button, Container } from "@mui/material";
import Shimmer from "../Shimmer/Shimmer";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const MovieDetail = () => {
  const { movieId } = useParams();
  useMovieTrailer(movieId);
  const getTrailerLink = useSelector((store) => store.movie.movieTrailer);

  useMovieDetail(movieId);
  const getMovieDetails = useSelector((store) => store.movie.movieDetail);
  console.log(getMovieDetails);
  if (!getMovieDetails || !getTrailerLink) return <Shimmer />;
  const { backdrop_path, title, poster_path, overview, runtime, vote_average } =
    getMovieDetails;
  return (
    <div className="moviesection">
      <img
        alt={title}
        src={IMG_CDN_URL_COVER + backdrop_path}
        className="movie-herosection"
      />
      <Container>
        <div className="detail-section">
          <img
            alt={title}
            src={IMG_CDN_URL + poster_path}
            className="poster-image"
          />

          <div className="information-section">
            <div className="heading">
              <h2>{title}</h2>
              <BookmarkBorderIcon />
            </div>
            <section className="summary">
              <h3 className="summary-title">Summary:</h3>
              <p className="summary-content">{overview}</p>
            </section>
            <section className="movie-stats">
              <h2>
                <AccessTimeIcon />
                {runtime} mins
              </h2>

              <h2>
                <StarBorderIcon />
                {Math.floor(vote_average)}
              </h2>

              <Button
                href={YOUTUBE_LINK + getTrailerLink.key}
                target="_blank"
                variant="outlined"
                className="trailer-btn"
              >
                Trailer
              </Button>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetail;
