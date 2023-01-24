//imports
import React from "react";
import { FiGithub } from "react-icons/fi";

//images
import MusicalityImage from "../../assets/musicality-img.png";

const ProjectCard = ({ data, cardIndex }) => {
  return (
    <div className="project-item">
      {data[cardIndex].map((item) => (
        <>
          <h2 className="project-name">{item.project}</h2>
          <div className="project-content">
            <img src={item.image} alt="logo" />
            <p className="project-description">{item.description}</p>
          </div>
          <div className="project-stack">
            <h3>{item.stack}</h3>
            <a href={item.github} target="_blank">
              <FiGithub className="github-icon" />
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProjectCard;
