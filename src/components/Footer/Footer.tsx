import React from "react";
import "./footer.css";
import { ReactComponent as Facebook } from "../../svg/Facebook.svg";
import { ReactComponent as Instagram } from "../../svg/Instagram.svg";

const Footer: React.FunctionComponent = () => {
  return (
    <section className="footer">
      <div className="social">
        <a target="blank" href="https://www.facebook.com/ramune.baleviciute">
          <Facebook className="icons" />
        </a>
        <a
          target="blank"
          href="https://instagram.com/ramune.bale?igshid=MzRlODBiNWFlZA=="
        >
          <Instagram className="icons" />
        </a>
      </div>
      <div className="credits">
        <p>
          Made by{" "}
          <a target="blank" href="https://anusauskas.com/">
            anusauskas.com
          </a>
        </p>
        <p>Nuotrauka: Dainius Putinas</p>
      </div>
    </section>
  );
};

export default Footer;
