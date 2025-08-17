import React from "react";
import Image21 from "../Images/Image21.png";
import "../Styles/Page.css";

function Page21(){
  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">E</section>
      <section className="drop-cap-text">ACH DAY,</section>
    </section>

      <p className="page-text">Thingo grew taller and stranger, it changed colours daily and its stem 
       twisted as if were stretching toward the sky. Its leaves were shaped like stars and at night, 
       they glowed softly in the moonlight.</p>

      <img src={Image21} alt="Page 21" className="page-image" />
      <section className="page-21">21</section>
    </section>
  );
}

export default Page21;