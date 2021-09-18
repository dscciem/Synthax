import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import TeamDetails from "./Team.json";

const Teams = () => {
  return (
    <section className="bg-gray-light" id="Teams">
      <div style={{ paddingTop: "30px" }}>
        <Heading title="Organizing Team" lineWidth="1/3" />
        <div class="grid grid-cols-5 gap-4 grid-flow-row px-8 py-10">
          {TeamDetails.map(
            ({ name, position, imgUrl, linkedinUrl, githubUrl }) => (
              <div style={{ width: "270px" }}>
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
