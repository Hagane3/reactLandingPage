import React from "react";

import classes from "./About.module.css";

import aboutImg from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.picture}>
        <img src={aboutImg} alt="about" className={classes.image}></img>
      </div>
      <div className={classes.description}>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#fylo">
          See how Fylo works <img src={arrow} alt="arrow icon"></img>
        </a>
      </div>
    </div>
  );
};

export default About;
