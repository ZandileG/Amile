import React from "react";
import Image20 from "../Images/Image20.png";
import "../Styles/Page.css";

function Page20(){

  return(
    <section className="page">
      <img src={Image20} alt="Page 20" className="page-image" />

      <p className="page-text">This is the content of Page 20.</p>
    </section>
  );
}

export default Page20;