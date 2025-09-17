import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image29 from "../Images/Image29.png";
import Image29_29 from "../Images/Image29-29.png";
import "../Styles/Page.css";

function Page29(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
        en: {
      dropCap: "A ",
      dropCapText: " LOW HUM",
      lines: [
    { text: "filled the air and Thingo began to glow.", start: 0, end: 6 },
    { text: "Its leaves stretched upward and released a soft chime, like tiny bells in the wind.", start: 7, end: 12 },
    { text: "The glow rippled through the soil and spread across the garden,", start: 13, end: 15 },
    { text: "up the hill, and down the streets of Dumakude.", start: 16, end: 19 },
  ]
},
       zu: {
    dropCap: "K",
    dropCapText: "UBE NOKUTHULA",
    lines: [
    { text: "emoyeni bese uThingo waqala ukukhanya.", start: 0, end: 6 },
    { text: "Amaqabunga akhe akhuphukela phezulu, akhipha iculo ezolile, ezwakala njengezinsimbi ezincane.", start: 7, end: 12 },
    { text: "Ukukhanya kwagcwala enhlabathini kwenyuka emagqumeni nemigwaqo yaseDumakude.", start: 13, end: 15 },
  ]
}
};
      const { dropCap, dropCapText, lines } = transcripts[language];

  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
        const isActive = currentPage === 29 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image29} alt="Page 29" className="page-image-29" />
      <img src={Image29_29} alt="Page 29" className="page-image-29-29" />

      <section className="odd">29</section>
    </section>
  );
}

export default Page29;