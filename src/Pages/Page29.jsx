import React from "react";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
  return(
    <section className="page">
      <img src={Image29} alt="Page 29" className="page-image" />

      <p className="page-text">This is the content of Page 29.</p>

      <section className="page-number-odd">29</section>
    </section>
  );
}

export default Page29;