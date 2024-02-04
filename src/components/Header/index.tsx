import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileHeader from "../MobileHeader";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

const Logo = styled.img`
  height: 2rem;
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo
          src={logo}
          alt="airbnb-logo"
          className="navbar__logo"
          tabIndex={0}
        />
        <div className="search-bar">
          <div className="search-bar__text" tabIndex={0}>
            Anywhere
          </div>
          <div className="search-bar__text" tabIndex={0}>
            Any week
          </div>
          <div className="search-bar__guest" tabIndex={0}>
            Add guest
          </div>
          <div>
            <SearchIcon
              className="search-bar__icon"
              tabIndex={0}
              aria-label="search-icon"
            />
          </div>
        </div>
        <div className="profile">
          <p className="profile__text" tabIndex={0}>
            Airbnb your home
          </p>
          <div className="profile__map">
            <LanguageIcon
              sx={{ fontSize: "1.3rem" }}
              tabIndex={0}
              aria-label="map-icon"
            />
          </div>
          <BasicMenu />
        </div>

        <MobileHeader />
        <SimpleBottomNavigation />
      </Navbar>
    </>
  );
};

export default Header;
