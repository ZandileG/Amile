import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image14 from "../Images/Image14.png";
import "../Styles/Page.css";

function Page14(){
  const { currentTime, language } = useContext(MusicContext);

     const transcript = [
    { text: "Unnoticed by them,", start: 4, end: 9 },
    { text: "a soft glow shimmered across the ground where the seed had been planted.", start: 4, end: 9 },
  ];

    const transcript = transcripts[language];

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image14} alt="Page 14" className="page-image" />

      <section className="page-14">14</section>
    </section>
  );
}

export default Page14;