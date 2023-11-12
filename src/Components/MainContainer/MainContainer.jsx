import React from "react";
import VideoBackground from "../VideoBackground/VideoBackground";
import VideoTitle from "../VideoTitle/VideoTitle";
import { useSelector } from "react-redux";
import "../../Styles/MainContainer/MainContainer.scss";

const MainContainer = () => {
  const videoTrailer = useSelector((store) => store.movie.popularMovie);

  if (!videoTrailer) return null;

  const { original_title, overview, id } = videoTrailer[0];

  return (
    <div className="main-container">
      <VideoBackground id={id} />
      <VideoTitle title={original_title} discription={overview} />
    </div>
  );
};

export default MainContainer;