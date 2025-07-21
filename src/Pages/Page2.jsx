import React from "react";
import "../Styles/Page.css";
import Image2 from "../Images/Image2.png";

function Page2(){

  return(
    <main className="page">
      <img src={Image2} alt="Page 2" className="page-image" />

      <p className="page-text">This is the content of Page 2.</p>
    </main>
  );
}

export default Page2;