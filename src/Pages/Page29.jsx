import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "A low hum filled the air and Thingo began to glow.", start: 16, end: 20 },
    { text: "Its leaves stretched upward and released a soft chime, like tiny bells in the wind.", start: 21, end: 27 },
    { text: "The glow rippled through the soil and spread across the garden,", start: 28, end: 32 },
    { text: "up the hill, and down the streets of Dumakude.", start: 33, end: 36 },
   ],
      zu: [
    { text: "Kube nokuthula emoyeni bese uThingo waqala ukukhanya.", start: 16, end: 20 },
    { text: "Amaqabunga akhe akhuphukela phezulu, akhipha iculo ezolile, ezwakala njengezinsimbi ezincane.", start: 21, end: 32 },
    { text: "Ukukhanya kwagcwala enhlabathini kwenyuka emagqumeni nemigwaqo yaseDumakude.", start: 33, end: 36 },
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

      <img src={Image29} alt="Page 29" className="page-image-29" />

      <section className="page-29">29</section>
    </section>
  );
}

export default Page29;