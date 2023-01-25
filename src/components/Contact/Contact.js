//import
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AiOutlineMail } from "react-icons/ai";

//styles
import "./_contact.scss";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-header">Contact</h2>
        <div className="contact-content">
          <p className="contact-paragraph">
            I'm currently looking for new opportunities as a Software Developer,
            on-site or remote. If you believe I would be an asset and a good fit
            for your company, send me an email below.
          </p>

          <a
            className="email-link"
            href="mailto:adriebuendia@icloud.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiOutlineMail className="email-icon" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
