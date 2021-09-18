import React from "react";
import Hero from "./assets/Hero.svg";
import BannerImage from "./assets/banner.svg";

const Banner = () => {
  return (
    <section className="grid grid-cols-2 grid-flow-col py-24 bg-gray-light place-items-center">
      <div className="col-span-1 self-start flex flex-col justify-start items-center">
        <img src={BannerImage} alt="" width="70%" />
        <div className="flex flex-1 mt-10">
          <button class="text-white-light bg-brown-light mx-2 font-semibold py-2 px-10 rounded-full inline-flex items-center shadow-xl">
            <span className="px-4 p-2">Register as Project Admin</span>
          </button>
          <button class="text-black-light bg-white mx-2 font-semibold py-2 px-10 rounded-full inline-flex items-center shadow-xl">
            <span className="px-4 p-2">Register as Participant</span>
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img src={Hero} alt="" />
      </div>
    </section>
  );
};

export default Banner;
