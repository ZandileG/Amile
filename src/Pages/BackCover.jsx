import React from "react";
import BackCoverImage from "../Images/BackCover.png";
import BackCoverImage2 from "../Images/BackCover2.png";
import Instagram from "../Icons/Instagram.png";
import Gmail from "../Icons/Gmail.png";
import LinkedIn from "../Icons/LinkedIn.png";
import GitHub from "../Icons/GitHub.png";
import "../Styles/Page.css";

function BackCover(){
  return(
    <section className="cover-page">
      <img src={BackCoverImage} alt="Cover" className="back-cover-image" />
      <img src={BackCoverImage2} alt="Cover" className="back-cover-image2" />
      <section className="contact-info">
      <p className="page-heading">Thank you for reading!</p>
      <a href="mailto:zandilegebuza@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Gmail} alt="Gmail" className="social-icon" /></a>
      <a href="https://github.com/ZandileG" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className="social-icon" /></a>
      <a href="https://www.linkedin.com/in/zandile-gebuza1303/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" className="social-icon" /></a>
      <a href="https://www.instagram.com/success.gebuza?igsh=MWozdnp5OHZ2amhidQ==" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className="social-icon" /></a>
      </section>
    </section>
  );
}

export default BackCover;