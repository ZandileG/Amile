import React from "react";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
  return(
    <section className="page">
      <img src={Image13} alt="Page 13" className="page-image" />

      <p className="page-text">After watering the plant, the girls grew bored and wandered back into the house.</p>

      <section className="page-number-odd">13</section>
    </section>
  );
}

export default Page13;