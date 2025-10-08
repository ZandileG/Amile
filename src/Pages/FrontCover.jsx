import React from "react";
import CoverImage from "../Images/FrontCover.png";
import "../Styles/Page.css";

function Cover1(){
  return(
    <section className="cover-page">
      <img src={CoverImage} alt="Cover" className="cover-image" />
      <section className="text-overlay">
      <h1 className="book-title">Amile and the Magic Seed</h1>
      <h2 className="book-subtitle">by Zandile Gebuza</h2>
    </section>
    </section>
  );
}

export default Cover1;