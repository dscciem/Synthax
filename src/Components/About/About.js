import React from "react";
import "./About.css";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <section className="h-screen bg-gray-light" id="About">
      <Heading title="About" lineWidth="1/5" />
      <p className="px-28 font-semibold text-xl text-center mt-48">
        The Developer Students Club - CIEM brings to you Synthax 2.0, an
        open-source program to introduce students to the world of open-source
        development and demonstrate the power of real-time unified
        problem-solving. The projects that we will be hosting have been
        hand-picked to inspire creative thinking and collaboration among all
        participants.
      </p>
    </section>
  );
};

export default About;
