import React from "react";

import classes from "./Features.module.css";

import featuresImg from "../assets/icon-access-anywhere.svg";
import securityImg from "../assets/icon-security.svg";
import collaborationImg from "../assets/icon-collaboration.svg";
import storeImg from "../assets/icon-any-file.svg";

import Fade from "react-reveal/Fade";

const Features = () => {
  return (
    <div className={classes.features} id="features">
      <Fade left cascade duration="1000">
        <div className={classes.access}>
          <img src={featuresImg} alt="computer and mobile"></img>
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </Fade>
      <Fade right cascade duration="1000">
        <div className={classes.security}>
          <img src={securityImg} alt="security shield"></img>
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </Fade>
      <Fade left cascade duration="1000">
        <div className={classes.collaboration}>
          <img src={collaborationImg} alt="clock and people"></img>
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </Fade>
      <Fade right cascade duration="1000">
        <div className={classes.store}>
          <img src={storeImg} alt="files"></img>
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Features;
