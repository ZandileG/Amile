import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "A low hum filled the air and Thingo began to glow.", start: 168, end: 172 },
    { text: "Its leaves stretched upward and released a soft chime, like tiny bells in the wind.", start: 173, end: 178 },
    { text: "The glow rippled through the soil and spread across the garden,", start: 179, end: 182 },
    { text: "up the hill, and down the streets of Dumakude.", start: 183, end: 186 },
   ],
      zu: [
    { text: "Kube nokuthula emoyeni bese uThingo waqala ukukhanya.", start: 163, end: 168 },
    { text: "Amaqabunga akhe akhuphukela phezulu, akhipha iculo ezolile, ezwakala njengezinsimbi ezincane.", start: 169, end: 174 },
    { text: "Ukukhanya kwagcwala enhlabathini kwenyuka emagqumeni nemigwaqo yaseDumakude.", start: 175, end: 177 },
  ]
};
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

      <img src={Image28} alt="Page 28" className="page-image-28" />

      <section className="page-28">28</section>
    </section>
  );
}

export default Page28;