import React from "react";
import "../../Styles/VideoBackground/VideoBackground.scss";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id, "movie");
  const trailerVideo = useSelector((store) => store.movie.movieTrailer);
  if (!trailerVideo) return;
  const { key } = trailerVideo;

  return (
    <div className="video-container">
      <iframe
        className="videobackground"
        src={`https://www.youtube.com/embed/${key}?loop=1&autoplay=1&mute=1&showinfo=0&controls=0&playlist=${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
