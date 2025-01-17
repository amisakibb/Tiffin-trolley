import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="navlogo">TIFFINTROLLEY.</h1>
          <p>
          Experience delicious food, delivered fast.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <a href="#navbar"><li>Home</li></a>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2> Get In Touch</h2>
           <ul>
            <li>8810528980</li>
            <li>tiffin_trolley@gmail.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ tiffintrolley.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
