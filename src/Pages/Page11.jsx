import React from "react";
import Image11 from "../Images/Image11.png";
import "../Styles/Page.css";

function Page11(){
  return(
    <section className="page">
      <img src={Image11} alt="Page 11" className="page-image" />

      <p className="page-text">This is the content of Page 11.</p>

      <section className="page-number-odd">11</section>
    </section>
  );
}

export default Page11;