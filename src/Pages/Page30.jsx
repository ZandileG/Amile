import React from "react";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  return(
    <section className="page">
      <img src={Image30} alt="Page 30" className="page-image" />

      <p className="page-text">This is the content of Page 30.</p>

      <section className="page-number-even">30</section>
    </section>
  );
}

export default Page30;