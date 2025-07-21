import React from "react";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){

  return(
    <section className="page">
      <img src={Image16} alt="Page 16" className="page-image" />

      <p className="page-text">This is the content of Page 16.</p>
    </section>
  );
}

export default Page16;