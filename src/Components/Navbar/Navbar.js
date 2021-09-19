import React from "react";
import { useState, useEffect } from "react";
import ToggleIcon from "./assets/ToggleIcon.svg";
import Logo from "./assets/Logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState("bg-gray-light text-brown-light");
  const [isOpen, setIsOpen] = useState(true);
  const navItems = ["Home", "Projects", "Prizes", "Sponsors", "FAQs"];

  const controlNavbar = () => {
    window.scrollY > 100
      ? setNav("bg-brown-dark text-white-light")
      : setNav("bg-gray-light text-brown-light");
  };

  useEffect(() => {
    const listener = window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className={`p-5 w-screen fixed ${nav}`} style={{ zIndex: "1" }}>
      <div className="flex justify-between items-center">
        <img
          src={Logo}
          className="mr-auto md:hidden ml-2 pr-2 rounded-full"
          alt=""
          style={{ width: "60px" }}
        />
        <img
          src={ToggleIcon}
          className="ml-auto md:hidden mr-2 pr-2"
          alt=""
          style={{ width: "40px" }}
          onClick={(e) => setIsOpen(!isOpen)}
        />
      </div>
      <nav>
        {isOpen ? (
          <ul
            className="flex flex-col md:flex-row"
            style={{ width: "50%", margin: "0 auto" }}
          >
            {navItems.map((item) => (
              <li
                key={item}
                className={`flex-1 text-center text-xl font-bold py-3 md:p-0 font-sans`}
              >
                <a href={"#" + item}>{item}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
