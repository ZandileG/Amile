import React from "react";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
  return(
    <section className="page">
      <img src={Image12} alt="Page 12" className="page-image" />

      <p className="page-text">This is the content of Page 12.</p>

      <section className="page-number">12</section>
    </section>
  );
}

export default Page12;