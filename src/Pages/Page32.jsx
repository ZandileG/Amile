import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image32 from "../Images/Image32.png";
import "../Styles/Page.css";

function Page32(){
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
    { text: "Thingo had awakened something in the town,", start: 0, end: 2.9 },
    { text: "magic that was thought to be gone.", start: 3, end: 5.6 },
  ],
      zu: [
    { text: "UThingo wayevuse okuthile eDumakude,", start: 0, end: 3.4 },
    { text: "umlingo okwakuthiwa awuseko.", start: 3.5, end: 6.5 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 32 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image32} alt="Page 32" className="page-image-32" />

      <section className="even">32</section>
    </section>
  );
}

export default Page32;