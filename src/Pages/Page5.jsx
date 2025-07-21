import React from "react";
import "../Styles/Page.css";
import Image5 from "../Images/Image5.png";

function Page5(){

  return(
    <main className="page">
      <img src={Image5} alt="Page 5" className="page-image" />

      <p className="page-text">This is the content of Page 5.</p>
    </main>
  );
}

export default Page5;