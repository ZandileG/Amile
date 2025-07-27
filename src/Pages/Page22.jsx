import React from "react";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
  return(
    <section className="page">
      <img src={Image22} alt="Page 22" className="page-image" />

      <p className="page-text">This is the content of Page 22.</p>

      <section className="page-number-even">22</section>
    </section>
  );
}

export default Page22;