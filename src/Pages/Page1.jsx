import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){

  return(
    <section className="page">
      <h1 className="title">Amile and the Magic Seed</h1>
      <img src={Image1} alt="Page 1" className="page-image" />
    </section>
  );
}

export default Page1;