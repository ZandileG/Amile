import React from "react";
import Image20 from "../Images/Image20.png";
import "../Styles/Page.css";

function Page20(){
  return(
    <section className="page">
      <img src={Image20} alt="Page 20" className="page-image" />

      <p className="page-text"><q>I hope we don’t get in trouble for this</q> said Khaya shaking her head.</p>

      <section className="page-number-even">20</section>
    </section>
  );
}

export default Page20;