import React from "react";
import BackCoverImage from "../Images/BackCover.png";
import "../Styles/Page.css";

function BackCover(){
  return(
    <section className="cover-page">
      <img src={BackCoverImage} alt="Cover" className="back-cover-image" />
    </section>
  );
}

export default BackCover;