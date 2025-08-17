import React from "react";
import Image31 from "../Images/Image31.png";
import "../Styles/Page.css";

function Page31(){
  return(
    <section className="page">
      <img src={Image31} alt="Page 31" className="page-image" />

      <p className="page-text">This is the content of Page 31.</p>

      <section className="page-number-odd">31</section>
    </section>
  );
}

export default Page31;