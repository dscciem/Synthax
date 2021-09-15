import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState([]);
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
    window.scrollY > 100 ? setNav(["dark", "darkText"]) : setNav([" ", " "]);
  };

  useEffect(() => {
    const listener = window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div className={"navbar " + nav[0]}>
      <nav className="nav-item">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href={"#" + item} className={"nav-link " + nav[1]}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
