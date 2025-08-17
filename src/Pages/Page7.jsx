import React from "react";
import Image7 from "../Images/Image7.png";
import "../Styles/Page.css";

function Page7(){
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">T</section>
      <section className="drop-cap-text">THE NEXT DAY,</section>
    </section>

      <p className="page-text">while wandering near the edge of a dried-up riverbed, Amile and Khaya spotted something odd.</p>

      <img src={Image7} alt="Page 7" className="page-image" />
      <section className="page-chapter">7</section>
    </section>
  );
}

export default Page7;