import React from "react";
import "./hero.css";
import Img1440 from "../../img/RamuneHeroD1440x990q.png";
import Img834 from "../../img/RamuneHeroD834x708q.png";
import Img390 from "../../img/RamuneHeroMob390x325q.png";

const Hero: React.FunctionComponent = () => {
  return (
    <section className="hero">
      <div className="img img1440">
        <img src={Img1440} alt="Ramune" />
      </div>
      <div className="img img834">
        <img src={Img834} alt="Ramune" />
      </div>
      <div className="img img390">
        <img src={Img390} alt="Ramune" />
      </div>
    </section>
  );
};

export default Hero;
