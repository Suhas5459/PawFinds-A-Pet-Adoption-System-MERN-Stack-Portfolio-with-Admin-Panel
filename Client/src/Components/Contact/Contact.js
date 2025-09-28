import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:suhas5459jadhav@gmail.com">
          suhas5459jadhav@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/suhas-jadhav-55524525a/">
          User Name: Suhas Jadhav
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Suhas5459">
          Suhas5459
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/suhaze._11a/?__pwa=1">
          suhaze._11a
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919156675459">
          +91 9156675459
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
