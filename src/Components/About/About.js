import React from "react";
import "./About.css";
import Background from "./asset/gdsc.svg";

const About = () => {
  return (
    <section className="about__wrapper" id="About">
      <div className="about__container">
        <div className="about__head">
          <h1 className="about__heading">About</h1>
          <hr className="about__line"></hr>
        </div>
      </div>
      <div className="about__container1">
        <img
          src={Background}
          style={{ marginBottom: "4rem" }}
          height="600"
          alt="gdse"
        />
        <p className="about__content">
          The Developer Students Club - CIEM brings to you Synthax 2.0, an
          open-source program to introduce students to the world of open-source
          development and demonstrate the power of real-time unified
          problem-solving. The projects that we will be hosting have been
          hand-picked to inspire creative thinking and collaboration among all
          participants.
        </p>
      </div>
    </section>
  );
};

export default About;
