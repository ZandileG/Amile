import React from "react";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
  return(
    <section className="page">
      <img src={Image27} alt="Page 27" className="page-image" />

      <p className="page-text">This is the content of Page 27.</p>

      <section className="page-number-odd">27</section>
    </section>
  );
}

export default Page27;