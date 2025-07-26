import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section className="drop-cap-text">NCE UPON A TIME</section>
    </section>

      <p className="page-text">This is the content of Page 1.</p>

      <img src={Image1} alt="Page 1" className="page-image" />
      <section className="page-number1">1</section>
    </section>
  );
}

export default Page1;