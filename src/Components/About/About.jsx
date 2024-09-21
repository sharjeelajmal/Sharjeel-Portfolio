import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src="/theme_pattern.svg" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className='profile-img' src="/profile.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As a passionate web developer, I love creating innovative and user-friendly websites that solve real-world problems.
            </p>
            <p>With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building responsive and high-performing web applications.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}} /></div>
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