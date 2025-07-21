import React from "react";
import "../Styles/Page.css";
import Image12 from "../Images/Image12.png";

function Page12(){

  return(
    <main className="page">
      <img src={Image12} alt="Page 12" className="page-image" />

      <p className="page-text">This is the content of Page 12.</p>
    </main>
  );
}

export default Page12;