import React from "react";
import "./About.css";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-light" id="About">
      <Heading title="About" lineWidth="20rem" />
      <p
        className="font-semibold text-xl mx-auto text-center py-20"
        style={{ width: "70%", margin: "0px auto" }}
      >
        Synthax 2.0 is an open source coding program, introduced in CIEM from
        the year 2020. This program is held exclusively for the students of
        CIEM. Existing batch students from any department can join the program
        and engage in a progressive development forum. Syntax provides the
        students with an impressive opportunity to witness a hands-on approach
        to learning.
        <br />
        <br />
        Students can contribute to various projects, and further expand their
        spectrum of knowledge. You can choose to work on any project that
        interests you and learn along the way. Projects will be curated from
        CIEM students only. If you have a project you would like to showcase,
        now’s the time. Fill out the application forms, and we will select
        the best projects for contribution in Synthax 2.0. These are the
        projects on which our participants will contribute and enhance them further.
        Are you someone with no prior knowledge in open source development?
        Fear not! This can be the perfect point to start. Take your novel steps
        in the open source journey by taking part in Synthax 2.0.
      </p>
    </section>
  );
};

export default About;
