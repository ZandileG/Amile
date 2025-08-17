import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section className="drop-cap-text">NCE UPON A TIME,</section>
    </section>

      <p className="page-chapter">in a distant land named Dumakude, there were green 
        hills, where you would see mountain goats grazing. There were clear rivers 
        where little fishes and frogs used to play. There was also a neighbourhood 
        that was full of life, where joy was shared, and every moment was a reason 
        to celebrate.
      </p>

      <img src={Image1} alt="Page 1" className="page-image-1" />
      <section className="page-1">1</section>
    </section>
  );
}

export default Page1;