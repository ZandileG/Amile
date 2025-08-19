import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import "../Styles/Page.css";

function Page31(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile laughed and danced,", start: 0, end: 3 },
    { text: "arms wide, as the sky wept with joy.", start: 4, end: 9 },
    { text: "Khaya ran to her, and together they spun around,", start: 10, end: 12 },
    { text: "laughing and dancing in the rain just like they used to.", start: 13, end: 15 },
   ],
      zu: [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
  ]
};

    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image31} alt="Page 31" className="page-image" />

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

      <section className="page-31">31</section>
    </section>
  );
}

export default Page31;