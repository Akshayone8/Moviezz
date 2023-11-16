import { useParams } from "react-router-dom";
import useSeriesDetail from "../../hooks/useSeriesDetail";
import { useSelector } from "react-redux";
import Shimmer from "../Shimmer/Shimmer";
import "../../Styles/MovieDetail/MovieDetail.scss";
import {
  IMG_CDN_URL_COVER,
  IMG_CDN_URL,
  YOUTUBE_LINK,
} from "../../utils/constants";
import { Button, Container } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const SeriesDetail = () => {
  const { seriesId } = useParams();
  useMovieTrailer(seriesId, "tv");
  const getTrailerLink = useSelector((store) => store.movie.movieTrailer);

  useSeriesDetail(seriesId);
  const getSeriesDetails = useSelector((store) => store.movie.seriesDetail);

  if (!getSeriesDetails) return <Shimmer />;
  const {
    backdrop_path,
    name,
    poster_path,
    overview,
    number_of_seasons,
    vote_average,
  } = getSeriesDetails;
  return (
    <div className="moviesection">
      <img
        alt={name}
        src={IMG_CDN_URL_COVER + backdrop_path}
        className="movie-herosection"
      />
      <Container>
        <div className="detail-section">
          <img
            alt={name}
            src={IMG_CDN_URL + poster_path}
            className="poster-image"
          />

          <div className="information-section">
            <div className="heading">
              <h2>{name}</h2>
              <BookmarkBorderIcon />
            </div>
            <section className="summary">
              <h3 className="summary-name">Summary:</h3>
              <p className="summary-content">{overview}</p>
            </section>
            <section className="movie-stats">
              <h2>
                <b>Seasons - </b>
                {number_of_seasons}
              </h2>

              <h2>
                <StarBorderIcon />
                {Math.floor(vote_average)}
              </h2>

              {getTrailerLink ? (
                <Button
                  href={YOUTUBE_LINK + getTrailerLink.key}
                  target="_blank"
                  variant="outlined"
                  className="trailer-btn"
                >
                  Trailer
                  <YouTubeIcon />
                </Button>
              ) : null}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeriesDetail;
