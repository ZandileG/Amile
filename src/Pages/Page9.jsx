import React from "react";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image" />

      <p className="page-text">Amile picked it up, cupped it in her hands and gasped, <q>It looks like a seed.</q></p>

      <p className="page-text"><q>It’s so pretty,</q> said Khaya.</p>

      <p className="page-text"><q>It really is,</q> Amile agreed. She held it gently in her hands then said, 
                               <q>I think we should plant it and see what kind of flower it becomes.</q></p>

      <section className="page-number-odd">9</section>
    </section>
  );
}

export default Page9;