import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
  const { currentTime, language } = useContext(MusicContext);

     const transcripts = {
      en: [
    { text: "Amile’s mom shook her head.", start: 106, end: 108 },
    { text: "“Uh, uh Amile, we have to go now,” said her mom,", start: 109, end: 113 },
    { text: "firmly as she reached for the plant.", start: 114, end: 116 },
    { text: "Amile pushed her mom’s hand away and covered Thingo with her arms.", start: 117, end: 121 },
    { text: "Tears welled in her eyes.", start: 122, end: 124 },
    { text: "She tried to hold them back,", start: 125, end: 127 },
    { text: "but they tumbled down her cheeks and splashed onto the roots of the plant.", start: 128, end: 132 },
   ],
      zu: [
    { text: "Umama kaAmile wanikina ikhanda.", start: 106, end: 108 },
    { text: "“Ah, ah Amile, sekumele sihambe manje,”", start: 109, end: 113 },
    { text: "kusho unina, efinyelela esitshalweni.", start: 114, end: 116 },
    { text: "UAmile wasusa isandla sikama wakhe wamboza uThingo ngezingalo zakhe.", start: 117, end: 121 },
    { text: "Izinyembezi zagcwala emehlweni akhe.", start: 122, end: 124 },
    { text: "Wazama ukuzibamba,", start: 125, end: 127 },
    { text: "kodwa zawa ezihlathini zakhe zafafaza ezimpandeni zesitshalo.", start: 128, end: 132 },
  ]
};
    const transcript = transcripts[language];

  return(
   <section className="page">
      <img src={Image25} alt="Page 25" className="page-image" />

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

      <section className="page-25">25</section>
    </section>

  );
}

export default Page25;