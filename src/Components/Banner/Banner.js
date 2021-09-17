import React from "react";
import Hero from "./assets/Hero.svg";
import "./Banner.css";
import DiscordLogo from "./assets/Discord.svg";

const Banner = () => {
  return (
    <div className="banner__parent" id="Home">
      <div className="banner__left">
        <div className="banner__wrapper">
          <h1>Synthax 2.0</h1>
          <br />
          <h2>30 Sep. - Oct. 2021</h2>
        </div>
        <div className="banner__btn__wrapper">
          <a
            href="https://linktr.ee/dscciem"
            rel="noreferrer"
            target="_blank"
            className="banner__btn"
          >
            Register
          </a>
          <a href="#" className="banner__btn discord__btn">
            <img
              src={DiscordLogo}
              height="25"
              className="banner__btn_discord"
              alt=""
            />
            <span>Join Us</span>
          </a>
        </div>
      </div>
      <div className="banner__right">
        <img src={Hero} alt="" className="banner__avatar" />
      </div>
    </div>
  );
};

export default Banner;
