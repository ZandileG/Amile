import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image26 from "../Images/Image26.png";
import "../Styles/Page.css";

function Page26(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = [
    { text: "Amile’s mom placed her hands on her hips,", start: 0, end: 3 },
    { text: "her face less friendly than before.", start: 4, end: 9 },
    { text: "Her dad noticed the look and stepped forward,", start: 10, end: 12 },
    { text: "reaching toward Amile ready to lift her off the ground,", start: 13, end: 15 },
    { text: "whether she liked it or not.", start: 16, end: 18 },
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

      <img src={Image26} alt="Page 26" className="page-image" />

      <section className="page-26">26</section>
    </section>
  );
}

export default Page26;