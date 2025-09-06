import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "After watering the plant,", start: 122, end: 126 },
    { text: "the girls grew bored and wandered back into the house.", start: 127, end: 132 },
   ],
      zu: [
    { text: "Ngemuva kokunisela lesi sitshalo,", start: 122, end: 126 },
    { text: "amantombazane abuyela endlini.", start: 127, end: 132 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image13} alt="Page 13" className="page-image-13" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 13 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="page-13">13</section>
    </section>
  );
}

export default Page13;