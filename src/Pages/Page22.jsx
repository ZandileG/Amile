import React from "react";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
  return(
    <section className="page">
      <img src={Image22} alt="Page 22" className="page-image" />

      <p className="page-text">On moving day, Amile sneaked out of the house to talk to Thingo.</p>

      <p className="page-text"><q>I don’t want to leave you,</q> she whispered, brushing her fingers 
       gently over one of its leaves. <q>Even though you're just a plant, you’re still my friend. I 
       love talking to you, I love looking after you,</q> she sighed.
      </p>

      <section className="page-number-even">22</section>
    </section>
  );
}

export default Page22;