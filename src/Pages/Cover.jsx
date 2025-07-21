import React from "react";
import CoverImage from "../Images/CoverImage.png";
import "../Styles/Page.css";

function Cover(){

  return(
    <section className="page">
      <h1 className="title">Amile and the Magic Seed</h1>

      <img src={CoverImage} alt="Cover" className="page-image" />

      <h2 className="page-text">by Zandile Gebuza</h2>
    </section>
  );
}

export default Cover;