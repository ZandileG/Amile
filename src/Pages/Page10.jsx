import React from "react";
import Image10 from "../Images/Image10.png";
import "../Styles/Page.css";

function Page10(){

  return(
    <section className="page">
      <img src={Image10} alt="Page 10" className="page-image" />

      <p className="page-text">This is the content of Page 10.</p>

      <section className="page-number">10</section>
    </section>
  );
}

export default Page10;