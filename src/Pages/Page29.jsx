import React from "react";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">C</section>
      <section className="drop-cap-text">HAPTER FIVE</section>
    </section>

      <p className="page-text">This is the content of Page 29.</p>

      <img src={Image29} alt="Page 29" className="page-image" />
      <section className="page-29">29</section>
    </section>
  );
}

export default Page29;