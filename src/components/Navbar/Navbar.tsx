import React, { useEffect, useState } from "react";
import "./navbar.css";
import useMediaQuery from "../../Hooks/useMediaQuery";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = (): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const { matches } = useMediaQuery({ matchQuery: "(max-width: 900px)" });

  useEffect(() => {
    if (matches) {
      setIsSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setIsSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p className="logo-upper">
          Ramunė<span>Balevičiūtė</span>
        </p>
        <p className="logo-lower">Teatro kritikė</p>
      </div>
      <div className="menu">
        {matches ? (
          <HamburgerButton
            isActive={isSidebarVisible}
            onClick={handleButtonClick}
          />
        ) : (
          <ul>
            <li>
              <a href="#about">Apie</a>
            </li>
            <li>
              <a href="#articles">Straipsniai</a>
            </li>
            <li>Tyrimai</li>
            <li>Knygos</li>
            <li>Kontaktai</li>
          </ul>
        )}
        {isSidebarVisible && (
          <Sidebar onBackdropClick={closeSidebar}>
            <ul className="menu-sidebar">
              <li>
                <a href="#about">Apie</a>
              </li>
              <li>
                <a href="#articles">Straipsniai</a>
              </li>
              <li>Tyrimai</li>
              <li>Knygos</li>
              <li>Kontaktai</li>
            </ul>
          </Sidebar>
        )}
      </div>
    </div>
  );
};

export default Navbar;
