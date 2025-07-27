import React from "react";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
  return(
    <section className="page">
      <img src={Image28} alt="Page 28" className="page-image" />

      <p className="page-text">This is the content of Page 28.</p>

      <section className="page-number-even">28</section>
    </section>
  );
}

export default Page28;