import React from "react";
import "../Styles/Page.css";
import Image10 from "../Images/Image10.png";

function Page10(){

  return(
    <main className="page">
      <img src={Image10} alt="Page 10" className="page-image" />

      <p className="page-text">This is the content of Page 10.</p>
    </main>
  );
}

export default Page10;