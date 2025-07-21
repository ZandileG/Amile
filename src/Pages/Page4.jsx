import React from "react";
import Image4 from "../Images/Image4.png";
import "../Styles/Page.css";

function Page4(){

  return(
    <section className="page">
      <img src={Image4} alt="Page 4" className="page-image" />

      <p className="page-text">This is the content of Page 4.</p>

      <section className="page-number">4</section>
    </section>
  );
}

export default Page4;