import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from "/theme_pattern.svg";
import arrow_icon from "/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
       <a 
       key={index} 
       href={work.w_link} 
       target="_blank" 
       rel="noopener noreferrer"
     >
            <img src={work.w_img} alt={work.w_name || 'Project Image'} />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
