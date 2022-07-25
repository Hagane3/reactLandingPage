import React from "react";

import classes from "./Header.module.css";
import headerImage from "../assets/illustration-intro.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={headerImage} alt="header"></img>
      <div className={classes.description}>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <h2>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </h2>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
