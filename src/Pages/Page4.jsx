import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image4 from "../Images/Image4.png";
import "../Styles/Page.css";

function Page4(){
  const { currentTime, language } = useContext(MusicContext);
  
      const transcripts = {
        en: [
    { text: "Every evening, Amile sat on the stoep of her house,", start: 0, end: 3 },
    { text: "watching the wind dance with the dust.", start: 4, end: 9 },
    { text: "She missed the scent of damp, red dirt and the gentle growl of thunder", start: 10, end: 12 },
    { text: "which used to give her a little fright, but now, it felt like a song she wanted to hear again.", start: 13, end: 15 },
    { text: "She also missed the days when she and her best friend Khaya splashed around in muddy puddles", start: 16, end: 18 },
    { text: "and played hide-and-seek in the backyard, their laughter rising higher than the clouds.", start: 19, end: 21 },
   ],
      zu: [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
    { text: "", start: 16, end: 18 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
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

      <img src={Image4} alt="Page 4" className="page-image" />

      <section className="page-4">4</section>
    </section>
  );
}

export default Page4;