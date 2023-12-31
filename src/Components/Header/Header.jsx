import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { triggerHamburger } from "../../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.hamburgerState);
  const toggleHamburger = () => {
    dispatch(triggerHamburger());
  };
  return (
    <div className="head-container">
      <Container fixed>
        <header className="header">
          <div className="logo-container">
            <h2 className="logo">Moviezz</h2>
            <MenuIcon className="hamburger-icon" onClick={toggleHamburger} />
          </div>
          <div className="navbar-lg">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
            <Link to="/favorite">Favorite</Link>
          </div>
          {isMenuOpen && (
            <div className="navbar-md">
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/series">Series</Link>
              <Link to="/favorite">Favorite</Link>
            </div>
          )}
        </header>
      </Container>
    </div>
  );
};

export default Header;
