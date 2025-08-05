import React from "react";
import CoverImage from "../Images/CoverImage.png";
import "../Styles/Page.css";

function Cover(){
  return(
    <section className="page">
    <section className="page-cover">
      <img src={CoverImage} alt="Cover" className="cover-image" />
    
    <section className="text-overlay">
      <h1 className="title">Amile and the Magic Seed</h1>
      <h2 className="subtitle">by Zandile Gebuza</h2>
    </section>
    </section>
    </section>
  );
}

export default Cover;