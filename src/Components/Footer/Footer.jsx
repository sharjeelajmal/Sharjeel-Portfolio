import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img className='logo' src="/logo.png" alt="" />
          <p> I specialize in designing websites that are both beautiful and effective. I use my skills and build websites that are easy to use and help businesses succeed.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="/user_icon.svg" alt="" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Copyright © 2024 Sharjeel Ajmal All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer