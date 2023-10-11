import React from "react";
import "./about.css";

const About = () => {
  // const aboutRef = useRef(null);

  // const handleNavClick = (ref: {
  //   current: { scrollIntoView: (arg0: { behavior: string }) => void };
  // }) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section className="about" id="about">
      <h2>Apie</h2>
      <p>
        <span>Dr. Ramunė Balevičiūtė</span> yra teatro kritikė ir tyrėja, knygų
        ir straipsnių autorė, taip pat knygų ir straipsnių rinktinių sudarytoja,
        leidinio „Teatro žurnalas“ vyriausioji redaktorė. Yra Lietuvos muzikos
        ir teatro akademijos Meno ir mokslo prorektorė. Dėsto, veda teatro
        kritikos seminarus, vadovauja baigiamiesiems darbams, aktyviai dalyvauja
        meno doktorantūros veikloje. Svarbiausios interesų sritys: meniniai
        tyrimai, vaidyba, teatro ir kognityvinio mokslo sąsajos, teatras
        vaikams.
      </p>
      <div className="bottom">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
