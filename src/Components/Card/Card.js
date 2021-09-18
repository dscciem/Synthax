import React from "react";

const Card = ({ name, position, imgUrl }) => {
  return (
    <figure class="bg-gray-100 rounded-xl p-8 shadow-xl">
      <img
        class="w-32 h-32 rounded-full mx-auto"
        src={imgUrl}
        alt=""
        width="auto"
        height="512"
      />
      <div class="pt-6  text-center space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">{name}</p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">{position}</div>
          <div class="text-gray-500">Social</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Card;
