import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image21 from "../Images/Image21.png";
import "../Styles/Page.css";

function Page21(){
    const { currentTime } = useContext(MusicContext);

     const transcript = [
    { text: "Thingo grew taller and stranger,", start: 0, end: 3 },
    { text: "it changed colours daily and its stem twisted as if it were stretching toward the sky.", start: 4, end: 9 },
    { text: "Its leaves were shaped like stars and at night,", start: 10, end: 12 },
    { text: "they glowed softly in the moonlight.", start: 13, end: 15 },
  ];
  
  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">E</section>
      <section className="drop-cap-text">ACH DAY,</section>
    </section>

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