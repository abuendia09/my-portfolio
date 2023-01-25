//imports
import React from "react";
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
      <Navbar />
      <div className="about-container">
        <h2 className="about-header">About Me</h2>
        <div className="about-content">
          <div className="paragraphs-container">
            <p className="about-paragraph">
              Hi! My name is Adrie Buendia and welcome to my page. Born on July
              9th, 1990 in Panama city, Panama. My family was military and we
              were stationed in Panama. After the military based closed down, my
              family loved it so much they decided to stay.
            </p>
            <p className="about-paragraph">
              In 2013, I moved to Louisville, KY to pursue my undergraduate
              degree in Economics at the University of Louisville.
            </p>

            <p className="about-paragraph">
              I've always had love and passion for computers and programming. So
              in 2022, I decided to make a career change. I joined
              <a href="https://devmountain.com/" target="_blank">
                &nbsp;DevMountain&nbsp;
              </a>
              and became a student in their part time cohort focusing on Full
              Stack Web Development. All while I still worked 60 hours a week.
            </p>
            <p className="about-paragraph">
              Today, I live in Florida and I'm focusing on improving my current
              skills and learning new ones as I search for a job that would
              allow me to break into the tech world.
            </p>
            <p className="about-paragraph">Current stack:</p>
            <ul className="stack-list">
              {stack && stack.map((stack, i) => <li key={i}>{stack}</li>)}
            </ul>
          </div>
          <div className="img-wrapper">
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
