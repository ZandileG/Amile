import React from "react";
import Image14 from "../Images/Image14.png";
import "../Styles/Page.css";

function Page14(){
  return(
    <section className="page">
      <img src={Image14} alt="Page 14" className="page-image" />

      <p className="page-text">This is the content of Page 14.</p>

      <section className="page-number">14</section>
    </section>
  );
}

export default Page14;