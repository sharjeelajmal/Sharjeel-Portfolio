import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "/profile.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={profile} alt="" />
      <h1>
        <span>I'm Sharjeel Ajmal,</span> Complete Website Developer
      </h1>
      <p>
        I specialize in designing websites that are both beautiful and
        effective. I use my skills and build websites that are easy to use and
        help businesses succeed.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div>
          <a href="resume.png" download="my resume" className="hero-resume">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
