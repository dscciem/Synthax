import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav-item">
        <ul>
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Timeline
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Prizes
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Sponsors
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
