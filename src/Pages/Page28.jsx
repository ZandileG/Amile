import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
  const { currentTime, language } = useContext(MusicContext);

  const transcripts = {
      en: {
      dropCap: "S",
      dropCapText: "UDDENLY,",
      lines: [
    { text: "the ground trembled.", start: 0, end: 5 },
    { text: "Amile and her dad quickly stood up and took a step back.", start: 6, end: 10 },
    { text: "Khaya and Amile’s mom did the same.", start: 11, end: 15 },
    ]
  },
    zu: {
    dropCap: "G",
    dropCapText: "WIQIQI,",
    lines: [
    { text: "kwavevezela umhlaba", start: 0, end: 5 },
    { text: "UAmile nobab’ wakhe basukuma ngokushesha, babuyela emuva.", start: 6, end: 10 },
    { text: "UKhaya noma kaAmile benza okufanayo.", start: 11, end: 15 },
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

      <img src={Image28} alt="Page 28" className="page-image-28" />

      <section className="page-28">28</section>
    </section>
  );
}

export default Page28;