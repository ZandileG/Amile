import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image21 from "../Images/Image21.png";
import Image21_21 from "../Images/Image21-21.png";
import "../Styles/Page.css";

function Page21(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

  const transcripts = {
      en: {
      dropCap: "E",
      dropCapText: "ACH DAY,",
      lines: [
    { text: "Thingo grew taller and stranger,", start: 0, end: 8 },
    { text: "it changed colours daily and its stem twisted as if it were stretching toward the sky.", start: 9, end: 16 },
    { text: "Its leaves were shaped like stars and at night,", start: 17, end: 19 },
    { text: "they glowed softly in the moonlight.", start: 20, end: 22 },
    ]
  },
    zu: {
    dropCap: "U",
    dropCapText: "SUKU NOSUKU,",
    lines: [
    { text: "uThingo wayekhula eba mude,", start: 0, end: 8 },
    { text: "eshintsha imibala futhi isiqu sakhe sisonteke sengathi sibheke esibhakabhakeni.", start: 9, end: 16 },
    { text: "Amaqabunga akhe ayemile njengezinkanyezi,", start: 17, end: 19 },
    { text: "futhi ebusuku, ayekhazimula ekukhanyeni kwenyanga.", start: 20, end: 22 },
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
        const isActive = currentPage === 21 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image21} alt="Page 21" className="page-image-21" />
      <img src={Image21_21} alt="Page 21" className="page-image-21-21" />

      <section className="page-21">21</section>
    </section>
  );
}

export default Page21;