import React from "react";
import "../Styles/Page.css";
import Image7 from "../Images/Image7.png";

function Page7(){

  return(
    <main className="page">
      <img src={Image7} alt="Page 7" className="page-image" />

      <p className="page-text">This is the content of Page 7.</p>
    </main>
  );
}

export default Page7;