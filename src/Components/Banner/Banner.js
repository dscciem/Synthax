import React from "react";
import Hero from "./assets/Hero.svg";
import BannerImage from "./assets/banner.svg";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-col py-24 bg-gray-light place-items-center">
      <div className="col-span-1 self-start flex flex-col items-center">
        <img src={BannerImage} alt="" width="70%" />
        <div className="flex flex-1 flex-col md:flex-row mt-10">
          <a
            href="https://forms.gle/E5u7VR8KRsJYy5FW9"
            className="text-white-light bg-brown-light md:mx-2 font-semibold py-2 px-10 rounded-full inline-flex items-center shadow-xl"
          >
            <span className="px-4 p-2">Register as Project Admin</span>
          </a>
          <a
            href="https://forms.gle/FctTve5qRJgqEVWb9"
            className="text-black-light bg-white mx-2 font-semibold py-2 px-10 rounded-full inline-flex items-center shadow-xl"
          >
            <span className="px-4 p-2">Register as Participant</span>
          </a>
        </div>
      </div>
      <div className="col-span-1 hidden md:inline">
        <img src={Hero} alt="" />
      </div>
    </section>
  );
};

export default Banner;
