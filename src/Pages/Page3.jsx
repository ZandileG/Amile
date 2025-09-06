import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
  const { currentTime, language } = useContext(MusicContext);
  
      const transcripts = {
        en: [
    { text: "In this, now quiet town, lived a young girl named Amile.", start: 51, end: 55 },
    { text: "Amile lived with her parents Mandisa and Sinalo.", start: 56, end: 60 },
    { text: "They named her Amile, a name with many meanings.", start: 61, end: 65 },
    { text: "To them, it meant “still standing,”", start: 66, end: 70 },
    { text: "a promise of the strength and resilience they saw within her.", start: 71, end: 75 },
   ],
      zu: [
    { text: "Kulelidolobha, kwakuhlala intombazanyana okuthiwa nguAmile.", start: 51, end: 55 },
    { text: "UAmile wayehlala nabazali bakhe uMandisa noSinalo.", start: 56, end: 60 },
    { text: "Bamqamba uAmile, igama elinencazelo eziningi.", start: 61, end: 65 },
    { text: "Kubo, kwakusho ukuthi “usamile,”", start: 66, end: 70 },
    { text: "isithembiso samandla nokuqina ababekubona ngaphakathi kuye.", start: 71, end: 75 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image3} alt="Page 3" className="page-image-3" />
      
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

      <section className="page-3">3</section>
    </section>
  );
}

export default Page3;