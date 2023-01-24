//imports
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProjectCard from "./ProjectCard";
import Data from "./ProjectData";

//styles
import "./_projects.scss";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-container">
        <h2 className="projects-header">Projects</h2>
        <ProjectCard data={Data} cardIndex={0} />
        <ProjectCard data={Data} cardIndex={1} />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
