import React, { useContext, useEffect } from "react";
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
    { text: "Amile’s mom placed her hands on her hips,", start: 0, end: 4 },
    { text: "her face less friendly than before.", start: 5, end: 7 },
    { text: "Her dad noticed the look and stepped forward,", start: 8, end: 11 },
    { text: "reaching toward Amile ready to lift her off the ground,", start: 12, end: 14 },
    { text: "whether she liked it or not.", start: 15, end: 16 },
   ],
      zu: [
    { text: "Uma kaAmile wabeka izandla zakhe okhalweni,", start: 0, end: 4 },
    { text: "ebukeka ethukuthele kunakuqala.", start: 5, end: 7 },
    { text: "Ubab’ wakhe wakubona lokho waguqa phambi kukaAmile", start: 8, end: 11 },
    { text: "ezilungiselele  ukumphakamisa, ethanda noma engathandi.", start: 12, end: 14 },
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