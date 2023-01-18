import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

//styles && images
import "./_about.scss";

const About = () => {
  const stack = [
    "Javscript",
    "ReactJS",
    "HTML5",
    "CSS3/SASS",
    "NodeJS",
    "Axios",
    "Express",
    "Postman",
    "git",
    "Github",
    "PostgreSQL",
    "SQL",
  ];

  return (
    <div>
      <div className="about-container">
        <Navbar />
        <h2 className="about-header">About Me</h2>
        <div className="about-content">
          <div className="about-inner">
            <p className="about-paragraph">
              Hi! My name is Adrie and I love coding and learning new things
              every day. Even though I have a undergraduate degree in Economics
              from the University of Louisville, I have always been driven
              towards computers and programming.
            </p>
            <p className="about-paragraph">
              In 2022, I decided to make a career change and join
              <a href="https://devmountain.com/" target="_blank">
                &nbsp;DevMountain&nbsp;
              </a>
              and take part of their part time cohort focusing on Full Stack Web
              Development, while I worked 60 hours a week.
            </p>
            <p className="about-paragraph">
              Now I'm focusing on improving my current skills and learning new
              technologies as I search for a job that would allow me to break
              into the tech world.
            </p>
            <p className="about-paragraph">Current technologies:</p>
            <ul className="stack-list">
              {stack && stack.map((stack, i) => <li key={i}>{stack}</li>)}
            </ul>
          </div>
          <div>
            <img
              className="profile-image"
              src={require("../../assets/image0.jpeg")}
              alt={"Adrie Buendia"}
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
