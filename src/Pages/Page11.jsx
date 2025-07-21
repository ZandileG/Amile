import React from "react";
import "../Styles/Page.css";
import Image11 from "../Images/Image11.png";

function Page11(){

  return(
    <main className="page">
      <img src={Image11} alt="Page 11" className="page-image" />

      <p className="page-text">This is the content of Page 11.</p>
    </main>
  );
}

export default Page11;