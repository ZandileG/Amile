import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
    const { currentTime } = useContext(MusicContext);
  
     const transcript = [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ];

  return(
    <section className="page">
      <p className="page-text">A low hum filled the air and Thingo began to glow. Its leaves 
       stretched upward and released a soft chime, like tiny bells in the wind. The glow rippled 
       through the soil and spread across the garden, up the hill, and down the streets of Dumakude.
      </p>

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