import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

     const transcripts = {
      en: [
    { text: "Days passed, and nothing happened.", start: 0, end: 2.8 },
    { text: "Amile kept watering it,", start: 2.9, end: 4.3 },
    { text: "and every day she hoped to see something new,", start: 4.4, end: 7.2 },
    { text: "anything, that would take her mind off all those boxes and phone calls with the moving company.", start: 7.3, end: 13.3 },
   ],
      zu: [
    { text: "Zadlula izinsuku kungenzeki lutho.", start: 0, end: 3.1 },
    { text: "UAmile wayelokhu eyinisela,", start: 3.2, end: 5.7 },
    { text: "futhi nsuku zonke wayenethemba lokubona okuthile okusha,", start: 5.8, end: 9.8 },
    { text: "noma yini, eyayizosusa ingqondo yakhe kuwo wonke lawo mabhokisi kanye nezingcingo nenkampani yokuthutha.", start: 9.9, end: 17.7 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <img src={Image16} alt="Page 16" className="page-image-16" />

      <p className="page-text">
        {transcript.map((line, i) => {
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