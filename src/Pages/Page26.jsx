import React from "react";
import Image26 from "../Images/Image26.png";
import "../Styles/Page.css";

function Page26(){
  return(
    <section className="page">
      <img src={Image26} alt="Page 26" className="page-image" />

      <p className="page-text">This is the content of Page 26.</p>

      <section className="page-number-even">26</section>
    </section>
  );
}

export default Page26;