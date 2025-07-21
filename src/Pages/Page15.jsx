import React from "react";
import "../Styles/Page.css";
import Image15 from "../Images/Image15.png";

function Page15(){

  return(
    <main className="page">
      <img src={Image15} alt="Page 15" className="page-image" />

      <p className="page-text">This is the content of Page 15.</p>
    </main>
  );
}

export default Page15;