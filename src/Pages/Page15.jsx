import React from "react";
import Image15 from "../Images/Image15.png";
import "../Styles/Page.css";

function Page15(){
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">E</section>
      <section className="drop-cap-text">VERY MORNING BEFORE SCHOOL,</section>
    </section>

      <p className="page-text">Amile sneaked outside with a cup of water and poured it over the plant. 
       Her parents would’ve been angry if they found out, but she couldn’t help it, she needed to know 
       what that seed would become.
      </p>

      <img src={Image15} alt="Page 15" className="page-image" />
      <section className="page-chapter">15</section>
    </section>
  );
}

export default Page15;