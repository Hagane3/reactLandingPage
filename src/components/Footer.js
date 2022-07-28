import React from "react";

import classes from "./Footer.module.css";
import logo from "../assets/logo.svg";
import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <Fade bottom duration="2000">
          <div className={classes.adress}>
            <img src={logo} className={classes.logo} alt="logo"></img>
            <div className={classes.location}>
              <img src={locationIcon} alt="location pin"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className={classes.phone}>
              <img src={phoneIcon} alt="phone"></img>
              <p>+1-543-123-4567</p>
            </div>
            <div className={classes.email}>
              <img src={emailIcon} alt="email"></img>
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className={classes.hyperlinks}>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#jobs">Jobs</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className={classes.socials}>
            <a href="#facebook">
              <BsFacebook size="1.5em" />
            </a>
            <a href="#twitter">
              <BsTwitter size="1.5em" />
            </a>
            <a href="#instagram">
              <BsInstagram size="1.5em" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
