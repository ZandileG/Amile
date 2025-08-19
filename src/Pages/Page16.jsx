import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = [
    { text: "Days passed, and nothing happened.", start: 0, end: 3 },
    { text: "Amile kept watering it,", start: 4, end: 9 },
    { text: "and every day she hoped to see something new,", start: 10, end: 12 },
    { text: "anything, that would take her mind off all those boxes and phone calls with the moving company.", start: 13, end: 15 },
   ],
      zu: [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
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