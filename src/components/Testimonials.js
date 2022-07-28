import React from "react";

import classes from "./Testimonials.module.css";

import user1Logo from "../assets/profile-1.jpg";
import user2Logo from "../assets/profile-2.jpg";
import user3Logo from "../assets/profile-3.jpg";
import quotesImg from "../assets/bg-quotes.png";

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className={classes.card}>
        <img src={quotesImg} alt="quotes" className={classes.quotes}></img>
        <p className={classes.description}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={classes.author}>
          <div className={classes.image}>
            <img src={user1Logo} alt="user"></img>
          </div>
          <div className={classes.details}>
            <h2>Satish Patel</h2>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <p className={classes.description}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={classes.author}>
          <div className={classes.image}>
            <img src={user2Logo} alt="user"></img>
          </div>
          <div className={classes.details}>
            <h2>Bruce McKenzie</h2>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <p className={classes.description}>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className={classes.author}>
          <div className={classes.image}>
            <img src={user3Logo} alt="user"></img>
          </div>
          <div className={classes.details}>
            <h2>Iva Boyd</h2>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
