import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Ramunė<span>Balevičiūtė</span>
        </p>
        <p>Teatro kritikė</p>
      </div>
      <div className="menu">
        <ul>
          <li>Apie</li>
          <li>Tyrimai</li>
          <li>Straipsniai</li>
          <li>Knygos</li>
          <li>Kontaktai</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
