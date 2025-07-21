import React from "react";
import "../Styles/Page.css";
import Image4 from "../Images/Image4.png";

function Page4(){

  return(
    <main className="page">
      <img src={Image4} alt="Page 4" className="page-image" />

      <p className="page-text">This is the content of Page 4.</p>
    </main>
  );
}

export default Page4;