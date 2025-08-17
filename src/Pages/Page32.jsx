import React from "react";
import Image32 from "../Images/Image32.png";
import "../Styles/Page.css";

function Page32(){
  return(
    <section className="page">
      <p className="page-text">After a while, Khaya ran back home to celebrate with her family.</p>

      <img src={Image32} alt="Page 32" className="page-image" />

      <section className="page-32">32</section>
    </section>
  );
}

export default Page32;