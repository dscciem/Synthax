import React from "react";
import Social from "../Social/Social";

const Card = ({ name, position, imgUrl, linkedinUrl, githubUrl }) => {
  return (
    <figure className="bg-gray-light rounded-xl p-8 shadow-xl">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={imgUrl}
        alt=""
        width="auto"
        height="512"
      />
      <div className="pt-6  text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">{name}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-gray-dark">{position}</div>
          <div className="text-gray-500 pt-5">
            <Social githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Card;
