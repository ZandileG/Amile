import React from "react";
import Image34 from "../Images/Image34.png";
import "../Styles/Page.css";

function Page34(){
  return(
    <section className="page">
      <img src={Image34} alt="Page 34" className="page-image" />

      <p className="page-text">This is the content of Page 34.</p>

      <section className="page-34">34</section>
    </section>
  );
}

export default Page34;