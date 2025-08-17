import React from "react";
import Image8 from "../Images/Image8.png";
import "../Styles/Page.css";

function Page8(){
  return(
    <section className="page">
      <img src={Image8} alt="Page 8" className="page-image" />

      <p className="page-text"><q>What’s that?</q> asked Khaya, pointing at the mysterious object on the ground.</p> 
      
      <p className="page-text">Tucked between pebbles and weeds, was a small, round, glowing object. Its 
       shell shimmered like a rainbow, as if it had captured the sun and the moon’s light all at once.</p>

      <section className="page-8">8</section>
    </section>
  );
}

export default Page8;