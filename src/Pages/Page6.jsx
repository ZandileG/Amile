import React from "react";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  return(
    <section className="page">
      <img src={Image6} alt="Page 6" className="page-image" />

      <p className="page-text">This is the content of Page 6.</p>

      <section className="page-number-even">6</section>
    </section>
  );
}

export default Page6;