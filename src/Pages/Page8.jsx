import React from "react";
import "../Styles/Page.css";
import Image8 from "../Images/Image8.png";

function Page8(){

  return(
    <main className="page">
      <img src={Image8} alt="Page 8" className="page-image" />

      <p className="page-text">This is the content of Page 8.</p>
    </main>
  );
}

export default Page8;