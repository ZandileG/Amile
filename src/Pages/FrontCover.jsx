import React from "react";
import CoverImage from "../Images/FrontCover.png";
import CoverImage2 from "../Images/FrontCover2.png";
import "../Styles/Page.css";

function Cover1(){
  return(
    <section className="page">
      <img src={CoverImage} alt="Cover" className="cover-image" />
      <img src={CoverImage2} alt="Cover" className="cover-image2" />
    </section>
  );
}

export default Cover1;