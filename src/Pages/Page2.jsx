import React from "react";
import Image2 from "../Images/Image2.png";
import "../Styles/Page.css";

function Page2(){

  return(
    <section className="page">
      <img src={Image2} alt="Page 2" className="page-image" />

      <p className="page-text">This is the content of Page 2.</p>
    </section>
  );
}

export default Page2;