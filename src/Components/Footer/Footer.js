import React from "react";
import "./Footer.css";
import Logo from "./Logo.png";
import Social from "../Social/Social";

const Footer = () => {
  const navItems = ["Home", "Projects", "Prizes", "Sponsors", "FAQs"];
  return (
    <footer
      className="h-auto grid grid-cols-12 grid-flow-row items-center pt-6 bg-gray-light"
      id="Footer"
    >
      <div
        className="col-span-8 grid grid-cols-3 grid-flow-row self-start"
        style={{ marginTop: "100px" }}
      >
        {navItems.map((item) => (
          <div
            className="py-5 text-brown-light font-bold text-center text-lg"
            key={item}
          >
            {item}
          </div>
        ))}
        <p
          className="col-span-3"
          id="copyright"
          style={{ marginTop: "-140px" }}
        >
          Copyright © 2021 GDSC-CIEM. All rights reserved.
        </p>
      </div>
      <div className="col-span-4 grid grid-rows-2 place-items-end">
        <img
          src={Logo}
          alt=""
          className="w-1/2 justify-self-center self-center ml-10"
          style={{ width: "180px", marginTop: "100px" }}
        />
        <div className="justify-self-end self-end" id="socials">
          <Social
            twitterUrl="https://twitter.com/dscciem"
            linkedinUrl="https://www.linkedin.com/company/gdsc-ciem"
            instaUrl="https://www.instagram.com/dscciem/"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
