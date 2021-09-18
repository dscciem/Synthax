import React from "react";
import "./Footer.css";
import Logo from "./Logo.png";
import Social from "../Social/Social";

const Footer = () => {
  const navItems = ["Home", "Projects", "Prizes", "Sponsors", "FAQs"];
  return (
    <footer
      className="h-auto grid grid-cols-12 grid-flow-row items-center pt-6"
      id="Footer"
      style={{ marginTop: "100px" }}
    >
      <div className="col-span-8 grid grid-cols-3 grid-flow-row self-start">
        {navItems.map((item) => (
          <div
            className="py-5 text-brown-light font-bold text-center text-lg"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="col-span-4 grid grid-rows-2 place-items-end">
        <img
          src={Logo}
          alt=""
          className="w-1/3 justify-self-center self-center ml-44"
        />
        <div className="justify-self-end self-end">
          <Social className="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
