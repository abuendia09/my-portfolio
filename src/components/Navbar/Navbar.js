//imports
import React, { useState } from "react";

//styles
import "./_navbar.scss";
import { TbLetterA } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  //setting mobile nav
  const [click, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  // closing mobile nav when clicking an option
  const handleCloseMobileMenu = () => {
    setShowNav(false);
  };

  return (
    <div>
      <nav className={showNav ? "navbar-container" : "navbar-container active"}>
        <NavLink to="/my-portfolio" className="navbar-logo">
          <TbLetterA />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <AiOutlineClose /> : <FiMenu />}
        </div>
        <ol className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-link-items">
            <NavLink
              to="/my-portfolio/about"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-link-items">
            <NavLink
              to="/my-portfolio/experience"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-link-items">
            <NavLink
              to="/my-portfolio/projects"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-link-items">
            <NavLink
              to="/my-portfolio/contact"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
