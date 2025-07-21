import React from "react";
import "../Styles/Page.css";
import Image1 from "../Images/Image1.png";

function Page1(){

  return(
    <main className="page">
      <img src={Image1} alt="Page 1" className="page-image" />

      <p className="page-text">This is the content of Page 1.</p>
    </main>
  );
}

export default Page1;