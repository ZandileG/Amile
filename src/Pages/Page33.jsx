import React from "react";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
  return(
    <section className="page">
      <p className="page-text">Amile’s parents hurried over, still in shock, and wrapped her in 
       a warm embrace. <q>“I guess we’re staying,</q> they said, grinning through happy tears.
      </p>
      
      <img src={Image33} alt="Page 33" className="page-image" />

      <section className="page-33">33</section>
    </section>
  );
}

export default Page33;