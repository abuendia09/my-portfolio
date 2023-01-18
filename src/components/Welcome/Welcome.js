import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

//styles
import "./_welcome.scss";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome-container">
        <h3 className="welcome-header">Welcome! My name is...</h3>
        <h1 className="welcome-name">Adrie Buendia</h1>
        <p className="welcome-paragraph">
          I am a software developer who has a passion for coding and learning
          new things everyday. Besides spending hours coding, other things I
          love include soccer, working out, reading and hiking.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
