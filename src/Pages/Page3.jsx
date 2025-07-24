import React from "react";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
  return(
    <section className="page">
      <img src={Image3} alt="Page 3" className="page-image" />

      <p className="page-text">This is the content of Page 3.</p>
      
      <section className="page-number-odd">3</section>
    </section>
  );
}

export default Page3;