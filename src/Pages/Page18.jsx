import React from "react";
import "../Styles/Page.css";
import Image18 from "../Images/Image18.png";

function Page18(){

  return(
    <main className="page">
      <img src={Image18} alt="Page 18" className="page-image" />

      <p className="page-text">This is the content of Page 18.</p>
    </main>
  );
}

export default Page18;