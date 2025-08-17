import React from "react";
import Image32 from "../Images/Image32.png";
import "../Styles/Page.css";

function Page32(){
  return(
    <section className="page">
      <img src={Image32} alt="Page 32" className="page-image" />

      <p className="page-text">This is the content of Page 32.</p>

      <section className="page-number-even">32</section>
    </section>
  );
}

export default Page32;