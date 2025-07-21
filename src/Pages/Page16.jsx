import React from "react";
import "../Styles/Page.css";
import Image16 from "../Images/Image16.png";

function Page16(){

  return(
    <main className="page">
      <img src={Image16} alt="Page 16" className="page-image" />

      <p className="page-text">This is the content of Page 16.</p>
    </main>
  );
}

export default Page16;