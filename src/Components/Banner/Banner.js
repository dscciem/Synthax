import React from "react";
import Hero from "./assets/Hero.svg";
import DiscordLogo from "./assets/Discord.svg";
import RegisterLogo from "./assets/Register.svg";
import BannerImage from "./assets/banner.svg";

const Banner = () => {
  return (
    <section className="flex py-24 bg-gray-light items-center justify-center">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-1 flex">
          <img src={BannerImage} alt="" width="80%" />
        </div>
      </div>
      <div className="flex-1 items-center">
        <img src={Hero} alt="" />
      </div>
    </section>
  );
};

export default Banner;
