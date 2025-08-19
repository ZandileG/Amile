import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = [
    { text: "After watering the plant,", start: 0, end: 3 },
    { text: "the girls grew bored and wandered back into the house.", start: 4, end: 9 },
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
      <img src={Image13} alt="Page 13" className="page-image" />

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

      <section className="page-13">13</section>
    </section>
  );
}

export default Page13;