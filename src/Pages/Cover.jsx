import React from "react";
import CoverImage from "../Images/CoverImage.png";
import "../Styles/Page.css";

function Cover(){
  return(
    <section className="page">
    <section className="page-cover">
      <img src={CoverImage} alt="Cover" className="cover-image" />
    </section>
    </section>
  );
}

export default Cover;