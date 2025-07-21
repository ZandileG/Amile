import React from "react";
import "../Styles/Page.css";
import Image3 from "../Images/Image3.png";

function Page3(){

  return(
    <main className="page">
      <img src={Image3} alt="Page 3" className="page-image" />

      <p className="page-text">This is the content of Page 3.</p>
    </main>
  );
}

export default Page3;