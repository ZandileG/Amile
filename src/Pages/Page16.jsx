import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Days passed, and nothing happened.", start: 22, end: 26 },
    { text: "Amile kept watering it,", start: 27, end: 31 },
    { text: "and every day she hoped to see something new,", start: 32, end: 36 },
    { text: "anything, that would take her mind off all those boxes and phone calls with the moving company.", start: 37, end: 42 },
   ],
      zu: [
    { text: "Zadlula izinsuku kungenzeki lutho.", start: 22, end: 26 },
    { text: "UAmile wayelokhu eyinisela,", start: 27, end: 31 },
    { text: "futhi nsuku zonke wayenethemba lokubona okuthile okusha,", start: 32, end: 36 },
    { text: "noma yini, eyayizosusa ingqondo yakhe kuwo wonke lawo mabhokisi kanye nezingcingo nenkampani yokuthutha.", start: 37, end: 42 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image16} alt="Page 16" className="page-image" />

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

      <section className="page-16">16</section>
    </section>
  );
}

export default Page16;