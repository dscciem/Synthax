import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import TeamDetails from "./Team.json";

const Teams = () => {
  return (
    <section className="bg-gray-light" id="Teams">
      <div style={{ paddingTop: "30px" }}>
        <Heading title="Organizing Team" lineWidth="40rem" />
        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4 grid-flow-row px-8 py-10 place-items-center">
          {TeamDetails.map(
            ({ name, position, imgUrl, linkedinUrl, githubUrl }) => (
              <div style={{ width: "270px" }} key={name}>
                <Card
                  name={name}
                  key={name}
                  position={position}
                  imgUrl={imgUrl}
                  linkedinUrl={linkedinUrl}
                  githubUrl={githubUrl}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Teams;
