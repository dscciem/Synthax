import React from "react";
import Hero from "./assets/Hero.svg";
import DiscordLogo from "./assets/Discord.svg";
import RegisterLogo from "./assets/Register.svg";
import BannerImage from "./assets/banner.svg";

const Banner = () => {
  return (
    <section className="grid grid-cols-2 grid-flow-col py-24 bg-gray-light place-items-center">
      <div className="col-span-1 self-start flex flex-col justify-start items-center">
        <img src={BannerImage} alt="" width="70%" />
      </div>
      <div className="col-span-1">
        <img src={Hero} alt="" />
      </div>
    </section>
  );
};

export default Banner;
