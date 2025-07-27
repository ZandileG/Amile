import React from "react";
import Image18 from "../Images/Image18.png";
import "../Styles/Page.css";

function Page18(){
  return(
    <section className="page">
      <img src={Image18} alt="Page 18" className="page-image" />

      <p className="page-text">This is the content of Page 18.</p>

      <section className="page-number-even">18</section>
    </section>
  );
}

export default Page18;