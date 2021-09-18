import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState("");
  const navItems = [
    "Home",
    "About",
    "Timeline",
    "Teams",
    "Projects",
    "Prizes",
    "Sponsors",
    "FAQs",
  ];
  const controlNavbar = () => {
    window.scrollY > 100
      ? setNav("bg-brown-light text-white-light")
      : setNav("bg-gray-light text-brown-light");
  };

  useEffect(() => {
    const listener = window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div className={`p-5 w-screen fixed ${nav}`}>
      <nav>
        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item}
              className={`flex-1 text-center text-xl font-bold font-sans`}
            >
              <a href={"#" + item}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
