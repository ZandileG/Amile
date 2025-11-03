import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
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
    { text: "Amile's dad stepped forward, reaching toward her,", start: 0, end: 10 },
    { text: "ready to lift her off the ground,", start: 11, end: 14 },
    { text: "whether she liked it or not.", start: 15, end: 7.2 },
   ],
      zu: [
    { text: "Ubaba kaAmile wagoba phambi kwakhe", start: 0, end: 2.9 },
    { text: "ezilungiselele  ukumphakamisa, ethanda noma engathandi.", start: 3, end: 7.5 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 27 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image27} alt="Page 27" className="page-image-27" />

      <section className="odd">27</section>
    </section>
  );
}

export default Page27;