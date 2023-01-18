import React from "react";

//styles
import "../../_var.scss";
import "./_footer.scss";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://www.github.com/abuendia09" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/adriebuendia" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/adriebuendia" target="_blank">
          <FiInstagram />
        </a>
      </div>
      <footer className="footer-text">
        <div className="footer-copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
