import React from "react";
import Image21 from "../Images/Image21.png";
import "../Styles/Page.css";

function Page21(){
  return(
    <section className="page">
      <img src={Image21} alt="Page 21" className="page-image" />

      <p className="page-text">This is the content of Page 21.</p>

      <section className="page-number-odd">21</section>
    </section>
  );
}

export default Page21;