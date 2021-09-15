import React from "react";
import Hero from "./assets/Hero.svg";
import "./Banner.css";
import DiscordLogo from "./assets/Discord.svg";

const Banner = () => {
  return (
    <div className="parent">
      <div className="left">
        <div className="wrapper">
          <h1>Synthax 2.0</h1>
          <br />
          <h2>30 Sep. - Oct. 2021</h2>
        </div>
        <div className="btn__wrapper">
          <a href="#" className="btn">
            Register
          </a>
          <a href="#" className="btn discord__btn">
            <img src={DiscordLogo} height="25" className="btn_discord" alt="" />
            <span>Join Us</span>
          </a>
        </div>
      </div>
      <div className="right">
        <img src={Hero} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default Banner;
