import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image7 from "../Images/Image7.png";
import "../Styles/Page.css";

function Page7(){
    const { currentTime } = useContext(MusicContext);

     const transcript = [
    { text: "while wandering near the edge of a dried-up riverbed,", start: 0, end: 3 },
    { text: "Amile and Khaya spotted something odd.", start: 4, end: 6 },
  ];

  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">T</section>
      <section className="drop-cap-text">HE NEXT DAY,</section>
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

      <img src={Image7} alt="Page 7" className="page-image-1" />
      <section className="page-7">7</section>
    </section>
  );
}

export default Page7;