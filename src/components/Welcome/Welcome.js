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
        <div className="paragraph-container">
          <p className="welcome-paragraph">
            I am a software developer who has a passion for coding and learning
            new things every day. Besides spending hours coding, other things I
            love include soccer, working out, reading and hiking.
          </p>
          <p className="welcome-paragraph-2">
            * This porftolio will be under constant improvement as I continue to
            learn more skills and technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
