import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image21 from "../Images/Image21.png";
import "../Styles/Page.css";

function Page21(){
  const { currentTime, language } = useContext(MusicContext);

  const transcripts = {
      en: {
      dropCap: "E",
      dropCapText: "ACH DAY,",
      lines: [
    { text: "Thingo grew taller and stranger,", start: 0, end: 3 },
    { text: "it changed colours daily and its stem twisted as if it were stretching toward the sky.", start: 4, end: 9 },
    { text: "Its leaves were shaped like stars and at night,", start: 10, end: 12 },
    { text: "they glowed softly in the moonlight.", start: 13, end: 15 },
    ]
  },
    zu: {
    dropCap: "U",
    dropCapText: "SUKU NOSUKU,",
    lines: [
    { text: "uThingo wayekhula eba mude,", start: 0, end: 3 },
    { text: "eshintsha imibala futhi isiqu sakhe sisonteke sengathi sibheke esibhakabhakeni.", start: 4, end: 9 },
    { text: "Amaqabunga akhe ayemile njengezinkanyezi,", start: 10, end: 12 },
    { text: "futhi ebusuku, ayekhazimula ekukhanyeni kwenyanga.", start: 13, end: 15 },
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