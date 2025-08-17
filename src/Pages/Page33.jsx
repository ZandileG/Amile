import React from "react";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
  return(
    <section className="page">
      <img src={Image33} alt="Page 33" className="page-image" />

      <p className="page-text">This is the content of Page 33.</p>

      <section className="page-number-odd">33</section>
    </section>
  );
}

export default Page33;