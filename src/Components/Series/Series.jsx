import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";
import usepopularSeries from "../../hooks/usepopularSeries";
import { useSelector } from "react-redux";
import { Container, Pagination } from "@mui/material";
import Shimmer from "../Shimmer/Shimmer";
import MovieCards from "../MovieCards/MovieCards";

const Series = () => {
  const [page, setPage] = useState(1);

  const handlePagination = (e, pageNumber) => {
    setPage(pageNumber);
  };
  usepopularSeries(page);
  const populateSeries = useSelector((store) => store.movie.popularSeries);

  if (!populateSeries) return <Shimmer />;
  return (
    <Container>
      <h1 className="movieHeader">
        Popular Series
        <TrendingUpIcon />
      </h1>
      <div className="moviecardContainer">
        {populateSeries.map((series) => (
          <Link key={series.id} to={`/series-detail/${series.id}`}>
            <MovieCards {...series} />
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

export default Series;
