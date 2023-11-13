import React from "react";
import "../../Styles/SecondaryContainer/SecondaryContainer.scss";
import usePopularMovie from "../../hooks/usePopularMovie";
import { Container, Grid } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCards from "../MovieCards/MovieCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SecondaryContainer = () => {
  usePopularMovie();
  const getMovieLists = useSelector((store) => store.movie.popularMovie);
  if (!getMovieLists) return;
  return (
    <Container>
      <div className="secondary-container">
        <span className="subheading">
          <WhatshotIcon />
          Trending Movies
        </span>
        <div className="moviecardContainer">
          {getMovieLists.map((getMovieList) => (
            <Link to={"/movie-detail/" + getMovieList.id} key={getMovieList.id}>
              <MovieCards {...getMovieList} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SecondaryContainer;
