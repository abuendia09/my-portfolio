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
              Hello! I'm Adrie Buendia, and I'm delighted to have you on my
              page. Born on July 9th, 1990, in Panama City, Panama, my family's
              military background initially brought us to Panama. Falling in
              love with the country, we decided to stay even after the military
              base closed down.
            </p>
            <p className="about-paragraph">
              In 2013, I relocated to Louisville, KY, to pursue my undergraduate
              degree in Economics at the University of Louisville.
            </p>

            <p className="about-paragraph">
              My journey took an exciting turn when I discovered my passion for
              computers and programming. In 2022, driven by this passion, I
              decided to embark on a career change. Despite working 60 hours a
              week, I joined
              <a
                href="https://devmountain.com/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;DevMountain&nbsp;
              </a>
              as a student in their part-time cohort, focusing on Full Stack Web
              Development.
            </p>
            <p className="about-paragraph">
              Fast forward to August 2023, where, having demonstrated my coding
              proficiency, I secured a spot in a prestigious bootcamp. This
              immersive experience was instrumental in refining my skills,
              gaining valuable insights, and deepening my understanding of
              coding. The bootcamp played a pivotal role in my ongoing evolution
              as a developer.
            </p>
            <p className="about-paragraph">
              Today, I call Florida home, where I am dedicated to honing my
              existing skills and acquiring new ones. I am actively seeking
              opportunities that will enable me to make my mark in the tech
              world.
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
