import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import BackdropDrawer from "./BackdropDrawer";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawer] = useState(false);

  const toogleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  return (
    <>
      {drawerIsOpen && (
        <>
          <BackdropDrawer close={toogleDrawer} />
          <SideDrawer>
            <nav className="main-navigation__drawer-nav">
              <NavLinks toogleDrawer={toogleDrawer} />
            </nav>
          </SideDrawer>
        </>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={toogleDrawer}>
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
