import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile’s mom placed her hands on her hips,", start: 133, end: 136 },
    { text: "her face less friendly than before.", start: 137, end: 142 },
    { text: "Her dad noticed the look and stepped forward,", start: 143, end: 145 },
    { text: "reaching toward Amile ready to lift her off the ground,", start: 146, end: 148 },
    { text: "whether she liked it or not.", start: 149, end: 151 },
   ],
      zu: [
    { text: "Uma kaAmile wabeka izandla zakhe okhalweni,", start: 133, end: 136 },
    { text: "ebukeka ethukuthele kunakuqala.", start: 137, end: 142 },
    { text: "Ubab’ wakhe wakubona lokho waguqa phambi kukaAmile", start: 143, end: 145 },
    { text: "ezilungiselele  ukumphakamisa, ethanda noma engathandi.", start: 146, end: 148 },
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

      <img src={Image27} alt="Page 27" className="page-image-27" />

      <section className="page-27">27</section>
    </section>
  );
}

export default Page27;