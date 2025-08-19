import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcript = [
    { text: "A low hum filled the air and Thingo began to glow.", start: 0, end: 3 },
    { text: "Its leaves stretched upward and released a soft chime, like tiny bells in the wind.", start: 4, end: 9 },
    { text: "The glow rippled through the soil and spread across the garden,", start: 10, end: 12 },
    { text: "up the hill, and down the streets of Dumakude.", start: 13, end: 15 },
  ];

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

      <img src={Image28} alt="Page 28" className="page-image" />

      <section className="page-28">28</section>
    </section>
  );
}

export default Page28;