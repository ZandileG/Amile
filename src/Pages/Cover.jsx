import React from "react";
import CoverImage from "../Images/CoverImage.png";
import "../Styles/Page.css";

function Cover(){

  return(
    <section className="page">
      <h1 className="title">Amile and the Magic Seed</h1>

      <img src={CoverImage} alt="Cover" className="page-image" />
    </section>
  );
}

export default Cover;