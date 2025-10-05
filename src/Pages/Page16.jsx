import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Days passed, and nothing happened.", start: 0, end: 2 },
    { text: "Amile kept watering it,", start: 3, end: 4 },
    { text: "and every day she hoped to see something new,", start: 5, end: 7 },
    { text: "anything, that would take her mind off all those boxes and phone calls with the moving company.", start: 8, end: 12 },
   ],
      zu: [
    { text: "Zadlula izinsuku kungenzeki lutho.", start: 0, end: 2 },
    { text: "UAmile wayelokhu eyinisela,", start: 3, end: 4 },
    { text: "futhi nsuku zonke wayenethemba lokubona okuthile okusha,", start: 5, end: 7 },
    { text: "noma yini, eyayizosusa ingqondo yakhe kuwo wonke lawo mabhokisi kanye nezingcingo nenkampani yokuthutha.", start: 8, end: 12 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image16} alt="Page 16" className="page-image-16" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const currentTime = currentTimeRef.current;
        const isActive = currentPage === 16 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="even">16</section>
    </section>
  );
}

export default Page16;