import React from "react";
import "../Styles/Page.css";
import Image19 from "../Images/Image19.png";

function Page19(){

  return(
    <main className="page">
      <img src={Image19} alt="Page 19" className="page-image" />

      <p className="page-text">This is the content of Page 19.</p>
    </main>
  );
}

export default Page19;