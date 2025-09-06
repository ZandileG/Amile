import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image26 from "../Images/Image26.png";
import Image26_26 from "../Images/Image26.png";
import "../Styles/Page.css";

function Page26(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

     const transcripts = {
      en: [
    { text: "Amile’s mom shook her head.", start: 0, end: 3 },
    { text: "“Uh, uh Amile, we have to go now,” said her mom,", start: 4, end: 6 },
    { text: "firmly as she reached for the plant.", start: 7, end: 9 },
    { text: "Amile pushed her mom’s hand away and covered Thingo with her arms.", start: 10, end: 14 },
    { text: "Tears welled in her eyes.", start: 15, end: 16 },
    { text: "She tried to hold them back,", start: 17, end: 19 },
    { text: "but they tumbled down her cheeks and splashed onto the roots of the plant.", start: 20, end: 23 },
   ],
      zu: [
    { text: "Umama kaAmile wanikina ikhanda.", start: 0, end: 3 },
    { text: "“Ah, ah Amile, sekumele sihambe manje,”", start: 4, end: 6 },
    { text: "kusho unina, efinyelela esitshalweni.", start: 7, end: 9 },
    { text: "UAmile wasusa isandla sikama wakhe wamboza uThingo ngezingalo zakhe.", start: 10, end: 14 },
    { text: "Izinyembezi zagcwala emehlweni akhe.", start: 15, end: 16 },
    { text: "Wazama ukuzibamba,", start: 17, end: 18 },
    { text: "kodwa zawa ezihlathini zakhe zafafaza ezimpandeni zesitshalo.", start: 19, end: 22 },
  ]
};
    const transcript = transcripts[language];

  return(
   <section className="page-even">
      <img src={Image26} alt="Page 26" className="page-image-26" />
      <img src={Image26_26} alt="Page 26" className="page-image-26-26" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 26 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="page-26">26</section>
    </section>

  );
}

export default Page26;