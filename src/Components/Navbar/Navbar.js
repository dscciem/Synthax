import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState("bg-gray-light text-brown-light");
  const navItems = ["Home", "Projects", "Prizes", "Sponsors", "FAQs"];
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
    <div className={`p-5 w-screen fixed ${nav}`} style={{ zIndex: "1" }}>
      <nav>
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
      </nav>
    </div>
  );
};

export default Navbar;
