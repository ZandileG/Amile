import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import "../Styles/Page.css";

function Page31(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile laughed and danced,", start: 79, end: 83 },
    { text: "arms wide, as the sky wept with joy.", start: 84, end: 89 },
    { text: "Khaya ran to her, and together they spun around,", start: 90, end: 94 },
    { text: "laughing and dancing in the rain just like they used to.", start: 95, end: 100 },
   ],
      zu: [
    { text: "UAmile wahleka, wadansa, izingalo zibanzi", start: 79, end: 83 },
    { text: "lapho isibhakabhaka sikhala ngenjabulo.", start: 84, end: 89 },
    { text: "UKhaya wagijima waya kuye, futhi ndawonye bazungeza,", start: 90, end: 94 },
    { text: "behleka futhi bedansa emvuleni njengoba babevame ukwenza.", start: 95, end: 100 },
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