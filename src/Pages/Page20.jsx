import React from "react";
import "../Styles/Page.css";
import Image20 from "../Images/Image20.png";

function Page20(){

  return(
    <main className="page">
      <img src={Image20} alt="Page 20" className="page-image" />

      <p className="page-text">This is the content of Page 20.</p>
    </main>
  );
}

export default Page20;