import { Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { LINKEDIN_URL, GITHUB_URL } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="footer-container ">
      <Container>
        <div className="sub-container">
          <h3>Made By Akshay Omkar</h3>
          <Link to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </Link>
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
