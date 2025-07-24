import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){
  return(
    <section className="page">
      <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section>NCE UPON A TIME</section>
      </section>
      <p>This is the content of Page 1.</p>

      {/*I have to change the image className back to page-image after prototype */}
      <img src={Image1} alt="Page 1" className="page-image1" />

      <section className="page-number-odd">1</section>
    </section>
  );
}

export default Page1;