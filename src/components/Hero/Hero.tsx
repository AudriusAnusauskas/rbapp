import React, { useEffect } from "react";
import "./hero.css";
import Img1440 from "../../img/RamuneHeroD1440x990.png";
import Img390 from "../../img/RamuneHeroMob390x325q.png";
import Navbar from "../Navbar/Navbar";

const Hero: React.FunctionComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElements = document.getElementsByClassName("hero");

      for (let i = 0; i < parallaxElements.length; i++) {
        const element = parallaxElements[i] as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        const image = element.querySelector(".img") as HTMLElement;
        const text = element.querySelector(".quote") as HTMLElement;

        image.style.transform = `translateY(${scrollTop * speed}px)`;
        text.style.transform = `translateY(${scrollTop * (speed * 0.5)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="hero">
      <div className="img img1440">
        <Navbar />
        <img src={Img1440} alt="Ramune" />
        <div className="quote">
          <p>
            "Kritikas turi gebėti atpažinti ir įvertinti teatro magiją,
            neapsiribojant tik analize ir kritika." <br />
            <span> - Helen Mirren</span>
          </p>
        </div>
      </div>

      <div className="img img390">
        <img src={Img390} alt="Ramune" />
      </div>
    </section>
  );
};

export default Hero;
