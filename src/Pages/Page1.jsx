import React from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section className="drop-cap-text">NCE UPON A TIME</section>
    </section>

      {/*I have to remove the 1 from the classNames after prototype */}
      <p className="page-text1">This is the content of Page 1.</p>

      <img src={Image1} alt="Page 1" className="page-image1" />
      <section className="page-number-odd">1</section>
    </section>
  );
}

export default Page1;