import React from "react";
import Image24 from "../Images/Image24.png";
import "../Styles/Page.css";

function Page24(){
  return(
    <section className="page">
      <img src={Image24} alt="Page 24" className="page-image" />

      <p className="page-text">This is the content of Page 24.</p>

      <p className="page-text">This is the content of Page 24.</p>

      <p className="page-text">This is the content of Page 24.</p>
      
      <p className="page-text">This is the content of Page 24.</p>

      <section className="page-number-even">24</section>
    </section>
  );
}

export default Page24;