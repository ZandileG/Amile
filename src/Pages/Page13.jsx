import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "After watering the plant,", start: 0, end: 2 },
    { text: "the girls went into the house to play in Amile's bedroom.", start: 3, end: 5.8 },
   ],
      zu: [
    { text: "Emva kwalokho,", start: 0, end: 2 },
    { text: "uAmile noKhaya bangena endlini bayodlalela ekamelweni likaAmile.", start: 3, end: 5.8 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
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

      <section className="odd">13</section>
    </section>
  );
}

export default Page13;