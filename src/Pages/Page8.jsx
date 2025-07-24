import React from "react";
import Image8 from "../Images/Image8.png";
import "../Styles/Page.css";

function Page8(){
  return(
    <section className="page">
      <img src={Image8} alt="Page 8" className="page-image" />

      <p className="page-text">This is the content of Page 8.</p>

      <section className="page-number-even">8</section>
    </section>
  );
}

export default Page8;