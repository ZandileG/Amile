import React from "react";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
  return(
    <section className="page">
      <img src={Image13} alt="Page 13" className="page-image" />

      <p className="page-text">This is the content of Page 13.</p>

      <section className="page-number">13</section>
    </section>
  );
}

export default Page13;