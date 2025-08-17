import React from "react";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
  return(
   <section className="page">
      <img src={Image25} alt="Page 25" className="page-image" />

      <p className="page-text">This is the content of Page 25.</p>

      <section className="page-number-odd">25</section>
    </section>

  );
}

export default Page25;