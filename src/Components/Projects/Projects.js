import React from "react";
import Heading from "../Heading/Heading";
import SearchBar from "./SearchBar";
import Card from "./Card";
import ProjectsDetail from "./Projects.json";

const Projects = () => {
  return (
    <div className="pt-24 bg-gray-light">
      <Heading title="Projects" lineWidth="20rem" />
      <SearchBar />
      <section
        className="bg-gray-light"
        id="Teams"
        style={{ overflow: "hidden" }}
      >
        <div style={{ paddingTop: "30px" }}>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 grid-flow-row px-8 py-10 place-items-stretch">
            {ProjectsDetail.map(({ name, techStack, repoLink, descr }) => (
              <Card
                name={name}
                techStack={techStack}
                descr={descr}
                repoLink={repoLink}
                key={repoLink}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
