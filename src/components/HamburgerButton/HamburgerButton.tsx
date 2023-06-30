import React from "react";
import classNames from "classnames";

import "./HamburgerButton.css";

interface Props {
  isActive: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isActive, onClick }: Props): JSX.Element => {
  return (
    <div
      className={classNames("hamburger", {
        ["active"]: isActive,
      })}
      onClick={onClick}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default HamburgerButton;
