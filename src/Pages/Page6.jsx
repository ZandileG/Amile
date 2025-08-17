import React from "react";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  return(
    <section className="page">
      <img src={Image6} alt="Page 6" className="page-image" />

      <p className="page-text"><q>But what about our neighbours? What about my friends? 
       I don’t want to leave Khaya.</q> said Amile with tears in her eyes.</p>

      <p className="page-text"><q>I know it’s hard Mimi, but we can’t stay here anymore. 
       Please understand,</q> said her dad while gently squeezing her hand.</p>

      <p className="page-text">Amile nodded, but she felt a quiet storm growing inside her.</p>

      <section className="page-number-even">6</section>
    </section>
  );
}

export default Page6;