import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image7 from "../Images/Image7.png";
import "../Styles/Page.css";

function Page7(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);
  
  const transcripts = {
    en: {
      dropCap: "T",
      dropCapText: "HE NEXT DAY,",
      lines: [
    { text: "Amile went to play with Khaya, determined to make the most of the time they still had together.", start: 0, end: 8 },
    { text: "They wandered down to the dried-up river, which had now become their makeshift playground,", start: 9, end: 13 },
    { text: "and near the edge of the riverbed, they spotted something unusual.", start: 14, end: 17.8 },
    ]
  },
    zu: {
    dropCap: "N",
    dropCapText: "GOSUKU OLULANDELAYO,",
    lines: [
    { text: "uAmile wahamba wayodlala noKhaya, efuna ukuchitha isikhathi esisele kuleli dolobha nomngani wakhe.", start: 0, end: 8 },
    { text: "Bazulazule baze bafika emfuleni owomile.", start: 9, end: 13 },
    { text: "Osebeni lomfula, babona into engajwayelekile.", start: 14, end: 17.8 },
      ]
    }
  };
    const { dropCap, dropCapText, lines } = transcripts[language];
    const currentTime = currentTimeRef.current;

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