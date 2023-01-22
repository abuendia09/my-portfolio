//imports
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import JobCard from "./JobCard";
import Data from "./Data";

//styles
import "./_experience.scss";

const Experience = () => {
  const [active, setActive] = useState("devmountain-card");

  return (
    <div>
      <Navbar />
      <div className="experience-container">
        <h2 className="experience-header">Experience</h2>
        <div className="experience-content">
          <div className="experience-btns">
            <button onClick={() => setActive("devmountain-card")}>
              DevMountain
            </button>
            <button onClick={() => setActive("mojitos-card")}>
              Mojitos Tapas
            </button>
            <button onClick={() => setActive("citadel-card")}>
              Citadel Roofing
            </button>
            <button onClick={() => setActive("chase-card")}>
              JPMorgan Chase
            </button>
          </div>
          {active === "devmountain-card" && (
            <JobCard data={Data} cardIndex={0} />
          )}
          {active === "mojitos-card" && <JobCard data={Data} cardIndex={1} />}
          {active === "citadel-card" && <JobCard data={Data} cardIndex={2} />}
          {active === "chase-card" && <JobCard data={Data} cardIndex={3} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
