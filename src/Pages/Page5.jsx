import React from "react";
import Image5 from "../Images/Image5.png";
import "../Styles/Page.css";

function Page5(){
  return(
    <section className="page">
      <img src={Image5} alt="Page 5" className="page-image" />

      <p className="page-text">This is the content of Page 5.</p>

      <section className="page-number-odd">5</section>
    </section>
  );
}

export default Page5;