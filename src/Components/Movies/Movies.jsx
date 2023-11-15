import { Container, Pagination } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "../../Styles/Movies/Movies.scss";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../Shimmer/Shimmer";
import MovieCards from "../MovieCards/MovieCards";
import { Link } from "react-router-dom";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import { useState } from "react";

const Movies = () => {
  const [page, setPage] = useState(1);
  const handlePagination = (e, pageNumber) => {
    setPage(pageNumber);
  };
  useTopRatedMovie(page);

  const populateTopRatedMovie = useSelector(
    (store) => store.movie.topRatedMovie
  );

  if (!populateTopRatedMovie) return <Shimmer />;
  return (
    <Container>
      <h1 className="movieHeader">
        Top Rated Movies
        <TrendingUpIcon />
      </h1>
      <div className="moviecardContainer">
        {populateTopRatedMovie.map((movie) => (
          <Link key={movie.id} to={`/movie-detail/${movie.id}`}>
            <MovieCards {...movie} />
          </Link>
        ))}
      </div>

      <Pagination
        count={10}
        page={page}
        color="secondary"
        onChange={handlePagination}
        className="pagination"
      />
    </Container>
  );
};

export default Movies;
