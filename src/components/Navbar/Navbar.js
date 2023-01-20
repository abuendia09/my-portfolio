//imports
import React, { useState } from "react";

//styles
import "./_navbar.scss";
import { TbLetterA } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
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
          {click ? <GrClose /> : <FiMenu />}
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
              href="/my-portfolio"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-link-items">
            <NavLink
              href="/my-portfolio"
              className="nav-link"
              onClick={handleCloseMobileMenu}
            >
              Work
            </NavLink>
          </li>
          <li className="nav-link-items">
            <NavLink
              href="/my-portfolio"
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
