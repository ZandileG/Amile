import React from "react";
import Image15 from "../Images/Image15.png";
import "../Styles/Page.css";

function Page15(){
  return(
    <section className="page">
      <img src={Image15} alt="Page 15" className="page-image" />

      <p className="page-text">This is the content of Page 15.</p>

      <section className="page-number">15</section>
    </section>
  );
}

export default Page15;