import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image7 from "../Images/Image7.png";
import "../Styles/Page.css";

function Page7(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

  const transcripts = {
    en: {
      dropCap: "T",
      dropCapText: "HE NEXT DAY,",
      lines: [
    { text: "Amile went to play with Khaya, determined to make the most of the time they still had together.", start: 0, end: 5 },
    { text: "They wandered down to the dried-up riverside, which had now become their makeshift playground,", start: 6, end: 10 },
    { text: "and near the edge of the riverbed, they noticed something unusual.", start: 11, end: 15 },
    ]
  },
    zu: {
    dropCap: "N",
    dropCapText: "GOSUKU OLULANDELAYO,",
    lines: [
    { text: "UAmile wahamba wayodlala noKhaya, efuna ukuchitha isikhathi esisele kuleli dolobha nomngani wakhe.", start: 0, end: 5 },
    { text: "Bazulazule baze bafika emfuleni owomile.", start: 0, end: 5 },
    { text: "Osebeni lomfula, babone into engajwayelekile.", start: 6, end: 8 },
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
        const isActive = currentPage === 7 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image7} alt="Page 7" className="page-image-7" />
      
      <section className="odd">7</section>
    </section>
  );
}

export default Page7;