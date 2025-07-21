import React from "react";
import "../Styles/Page.css";
import Image6 from "../Images/Image6.png";

function Page6(){

  return(
    <main className="page">
      <img src={Image6} alt="Page 6" className="page-image" />

      <p className="page-text">This is the content of Page 6.</p>
    </main>
  );
}

export default Page6;