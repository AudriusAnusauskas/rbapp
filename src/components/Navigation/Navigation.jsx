import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navitem">
        <a className="link" href="/">
          Apie
        </a>
      </div>
      <div className="navitem">
        <a className="link" href="/">
          Straipsniai
        </a>
      </div>
      <div className="navitem">
        <a className="link" href="/">
          Recenzijos
        </a>
      </div>

      <div className="navitem">
        <a className="link" href="/">
          Kontaktai
        </a>
      </div>
    </div>
  );
};

export default Navigation;
