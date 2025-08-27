import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile laughed and danced,", start: 99, end: 101 },
    { text: "arms wide, as the sky wept with joy.", start: 102, end: 104 },
    { text: "Khaya ran to her, and together they spun around,", start: 105, end: 107 },
    { text: "laughing and dancing in the rain just like they used to.", start: 108, end: 112 },
   ],
      zu: [
    { text: "UAmile wahleka, wadansa, izingalo zibanzi", start: 99, end: 101 },
    { text: "lapho isibhakabhaka sikhala ngenjabulo.", start: 102, end: 104 },
    { text: "UKhaya wagijima waya kuye, futhi ndawonye bazungeza,", start: 105, end: 107 },
    { text: "behleka futhi bedansa emvuleni njengoba babevame ukwenza.", start: 108, end: 112 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image33} alt="Page 33" className="page-image-33" />

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

      <section className="page-33">33</section>
    </section>
  );
}

export default Page33;