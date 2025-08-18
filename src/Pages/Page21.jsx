import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image21 from "../Images/Image21.png";
import "../Styles/Page.css";

function Page21(){
    const { currentTime } = useContext(MusicContext);
  
  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">E</section>
      <section className="drop-cap-text">ACH DAY,</section>
    </section>

      <p className="page-chapter">Thingo grew taller and stranger, it changed colours daily and its stem 
       twisted as if were stretching toward the sky. Its leaves were shaped like stars and at night, 
       they glowed softly in the moonlight.</p>

      <p className="page-chapter">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image21} alt="Page 21" className="page-image-1" />
      <section className="page-21">21</section>
    </section>
  );
}

export default Page21;