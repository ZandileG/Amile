import React from "react";
import Image7 from "../Images/Image7.png";
import "../Styles/Page.css";

function Page7(){
  return(
    <section className="page">
      <img src={Image7} alt="Page 7" className="page-image" />

      <p className="page-text">This is the content of Page 7.</p>

      <section className="page-number-odd">7</section>
    </section>
  );
}

export default Page7;