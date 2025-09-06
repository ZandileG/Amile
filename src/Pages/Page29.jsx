import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
        en: {
      dropCap: "A ",
      dropCapText: " LOW HUM",
      lines: [
    { text: "filled the air and Thingo began to glow.", start: 0, end: 10 },
    { text: "Its leaves stretched upward and released a soft chime, like tiny bells in the wind.", start: 11, end: 18 },
    { text: "The glow rippled through the soil and spread across the garden,", start: 19, end: 21 },
    { text: "up the hill, and down the streets of Dumakude.", start: 22, end: 25 },
  ]
},
       zu: {
    dropCap: "K",
    dropCapText: "UBE NOKUTHULA",
    lines: [
    { text: "emoyeni bese uThingo waqala ukukhanya.", start: 0, end: 10 },
    { text: "Amaqabunga akhe akhuphukela phezulu, akhipha iculo ezolile, ezwakala njengezinsimbi ezincane.", start: 11, end: 19 },
    { text: "Ukukhanya kwagcwala enhlabathini kwenyuka emagqumeni nemigwaqo yaseDumakude.", start: 20, end: 25 },
  ]
}
};
      const { dropCap, dropCapText, lines } = transcripts[language];

  return(
    <section className="page-odd">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
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