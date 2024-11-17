import React from 'react'
import './About.css'
import theme_pattern from "/theme_pattern.svg"
import profile from "/profile.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className='profile-img' src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As a passionate Full-Stack MERN Developer, I thrive on creating innovative, user-friendly, and scalable web solutions that address real-world challenges. With a solid foundation in MERN Stack, 
            </p>
            <p>I specialize in developing responsive and high-performance web applications, delivering seamless user experiences across devices.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Node JS</p> <hr style={{width:"70%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1><p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievment">
          <h1>20+</h1><p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievment">
          <h1>15+</h1><p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About