import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){

  return(
    <section className="page">
      <img src={Image1} alt="Page 1" className="page-image" />

      <p className="page-text">This is the content of Page 1.</p>

      <section className="page-number">1</section>
    </section>
  );
}

export default Page1;