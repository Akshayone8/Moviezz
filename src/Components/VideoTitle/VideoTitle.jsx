import { Container } from "@mui/material";
import "../../Styles/VideoTitle/VideoTitle.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, discription, id }) => {
  return (
    <Container>
      <div className="videoTitle">
        <h1>{title}</h1>
        <Link to={`/movie-detail/${id}`}>
          <Button variant="outlined">More Info</Button>
        </Link>
      </div>
    </Container>
  );
};

export default VideoTitle;
