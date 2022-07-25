import React from "react";

import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          <img src={logo} className={classes.logo} alt="logo"></img>
        </div>
        <ul className={classes.menu}>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#signin">Sign In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
