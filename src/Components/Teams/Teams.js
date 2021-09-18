import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import TeamDetails from "./Team.json";

const Teams = () => {
  return (
    <section className="bg-gray-light" id="Teams">
      <Heading title="Teams" lineWidth="1/5" />
      <div class="grid grid-cols-4 gap-4 grid-flow-row px-8 py-10">
        {TeamDetails.map(
          ({ name, position, imgUrl, linkedinUrl, githubUrl }) => (
            <Card name={name} key={name} position={position} imgUrl={imgUrl} />
          )
        )}
      </div>
    </section>
  );
};

export default Teams;
