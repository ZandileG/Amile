import React from "react";
import "../Styles/Page.css";
import Image13 from "../Images/Image13.png";

function Page13(){

  return(
    <main className="page">
      <img src={Image13} alt="Page 13" className="page-image" />

      <p className="page-text">This is the content of Page 13.</p>
    </main>
  );
}

export default Page13;