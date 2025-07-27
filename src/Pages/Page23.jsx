import React from "react";
import Image23 from "../Images/Image23.png";
import "../Styles/Page.css";

function Page23(){
  return(
    <section className="page">
      <img src={Image23} alt="Page 23" className="page-image" />

      <p className="page-text">This is the content of Page 23.</p>

      <section className="page-number-odd">23</section>
    </section>
  );
}

export default Page23;