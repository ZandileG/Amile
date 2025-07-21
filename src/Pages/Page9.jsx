import React from "react";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){

  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image" />

      <p className="page-text">This is the content of Page 9.</p>

      <section className="page-number">9</section>
    </section>
  );
}

export default Page9;