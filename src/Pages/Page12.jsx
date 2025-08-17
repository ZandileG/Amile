import React from "react";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
  return(
    <section className="page">
      <img src={Image12} alt="Page 12" className="page-image" />

      <p className="page-text"><q>Wait here,</q> Amile said to Khaya, then hurried into the shed to 
       fetch water. Khaya crossed her arms as she watched Amile go, giving her a disapproving look.</p>

      <section className="page-number-even">12</section>
    </section>
  );
}

export default Page12;