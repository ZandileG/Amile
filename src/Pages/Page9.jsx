import React from "react";
import "../Styles/Page.css";
import Image9 from "../Images/Image9.png";

function Page9(){

  return(
    <main className="page">
      <img src={Image9} alt="Page 9" className="page-image" />

      <p className="page-text">This is the content of Page 9.</p>
    </main>
  );
}

export default Page9;