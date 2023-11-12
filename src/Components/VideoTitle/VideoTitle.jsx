import { Container } from "@mui/material";
import "../../Styles/VideoTitle/VideoTitle.scss";
import { Button } from "@mui/material";

const VideoTitle = ({ title, discription }) => {
  return (
    <Container>
      <div className="videoTitle">
        <h1>{title}</h1>
        <Button variant="outlined">More Info</Button>
      </div>
    </Container>
  );
};

export default VideoTitle;
