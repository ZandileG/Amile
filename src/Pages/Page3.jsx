import React from "react";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
  return(
    <section className="page">
      <img src={Image3} alt="Page 3" className="page-image" />

      <p className="page-text">In this, now quiet town, lived a young girl named Amile. 
        Amile lived with her parents Mandisa and Sinalo. They named her Amile, a name 
        with many meanings. To them, it meant <q>still standing,</q> a promise of the 
        strength and resilience they saw within her.
      </p>
      
      <section className="page-number-odd">3</section>
    </section>
  );
}

export default Page3;