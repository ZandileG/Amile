import React from "react";
import Image5 from "../Images/Image5.png";
import "../Styles/Page.css";

function Page5(){
  return(
    <section className="page">
      <img src={Image5} alt="Page 5" className="page-image" />

      <p className="page-text">One night, at dinner, her dad reached across the table and 
       held her hand. <q>Mimi,</q> he began gently, <q>We have to leave Dumakude.</q></p>
        
      <p className="page-text">Amile froze. Her eyes grew wide, searching her dad’s face 
       for some sign that it wasn’t true.</p> 

      <p className="page-text"><q>Mimi,</q> her mom said softly, <q>the town’s water is 
       gone, and the food is running out.</q></p>

      <section className="page-number-odd">5</section>
    </section>
  );
}

export default Page5;