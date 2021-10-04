import React from "react";
import ProjectIcon from "./project.svg";

const Card = ({ name, techStack, descr, repoLink }) => {
  return (
    <a href={repoLink} rel="noreferrer" target="_blank">
      <figure
        className="rounded-xl p-8 shadow-2xl transform hover:scale-105 transition"
        style={{ backgroundColor: "#A65126" }}
      >
        <img
          className="w-32 h-16 rounded-full mx-auto"
          src={ProjectIcon}
          alt=""
          width="auto"
          height="512"
        />
        <div className="pt-6  text-center space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">{name}</p>
          </blockquote>
          <figcaption className="font-medium h-40">
            <div className="text-yellow-light">{techStack}</div>
            <div className="text-gray-500 py-5">{descr}</div>
          </figcaption>
        </div>
      </figure>
    </a>
  );
};

export default Card;
