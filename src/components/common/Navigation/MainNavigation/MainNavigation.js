import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../Backdrop/Backdrop";
import './MainNavigation.css';

const MainNavigation = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerVisibility = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={handleDrawerVisibility} />}
      <SideDrawer show={isDrawerOpen} onClick={handleDrawerVisibility}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleDrawerVisibility}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
