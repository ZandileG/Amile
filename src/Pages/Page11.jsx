import React from "react";
import Image11 from "../Images/Image11.png";
import "../Styles/Page.css";

function Page11(){
  return(
    <section className="page">
      <img src={Image11} alt="Page 11" className="page-image" />

      <p className="page-text"><q>Oh, I have an idea!</q> exclaimed Amile, her eyes lighting up with excitement.</p>

      <p className="page-text">The girls ran back to Amile’s house, found a quiet patch behind the shed, and dug a 
       tiny hole. Amile planted the seed and gently patted the dry soil around it.</p>

      <section className="page-number-odd">11</section>
    </section>
  );
}

export default Page11;