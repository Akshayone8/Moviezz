import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  IMG_CDN_URL_COVER,
  IMG_CDN_URL,
  YOUTUBE_LINK,
} from "../../utils/constants";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button, Container } from "@mui/material";
import Shimmer from "../Shimmer/Shimmer";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useBookMark from "../../hooks/useBookMark";
import { fetchBookMark } from "../../utils/movieSlice";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useMovieTrailer(movieId, "movie");
  const getTrailerLink = useSelector((store) => store.movie.movieTrailer);
  const getBookMark = useSelector((store) => store.movie.bookMarkDetail);
  console.log(getBookMark);
  useMovieDetail(movieId);

  const getMovieDetails = useSelector((store) => store.movie.movieDetail);
  useBookMark();

  const addBookMark = (movieId) => {
    const currentBookMark = JSON.parse(localStorage.getItem("bookmark")) || [];
    localStorage.setItem(
      "bookmark",
      JSON.stringify([...currentBookMark, movieId])
    );
    dispatch(fetchBookMark(localStorage.getItem("bookmark")));
  };

  const removeBookMark = (movieId) => {
    const currentBookMark = JSON.parse(localStorage.getItem("bookmark")) || [];
    const filteredMovie = currentBookMark.filter(
      (movies) => movies !== movieId
    );
    localStorage.setItem("bookmark", JSON.stringify([...filteredMovie]));
    dispatch(fetchBookMark(localStorage.getItem("bookmark")));
  };

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

              {getBookMark && getBookMark.includes(movieId) ? (
                <BookmarkIcon onClick={() => removeBookMark(movieId)} />
              ) : (
                <BookmarkBorderIcon onClick={() => addBookMark(movieId)} />
              )}
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
                <YouTubeIcon />
              </Button>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetail;
