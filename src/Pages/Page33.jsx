import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image33 from "../Images/Image33.png";
import Image33_33 from "../Images/Image33-33.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page33(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

   function stop(e){
    e.stopPropagation();
    e.preventDefault()
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation){
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  function handleToggle(e){
    e.stopPropagation();
    setFlipped((prev) => !prev);
  };

     const transcripts = {
      en: [
    { text: "Amile laughed and danced,", start: 0, end: 2 },
    { text: "arms wide, as the sky wept with joy.", start: 3, end: 6 },
    { text: "Khaya ran to her, and together they spun around,", start: 7, end: 9 },
    { text: "laughing and dancing in the rain just like they used to.", start: 10, end: 14 },
   ],
      zu: [
    { text: "UAmile wahleka, wadansa, izingalo zibanzi", start: 0, end: 2 },
    { text: "lapho isibhakabhaka sikhala ngenjabulo.", start: 3, end: 6 },
    { text: "UKhaya wagijima waya kuye, futhi ndawonye bazungeza,", start: 7, end: 9 },
    { text: "behleka futhi bedansa emvuleni njengoba babevame ukwenza.", start: 10, end: 14 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
   <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image33} alt="Page 33" className="page-image-33" />
        ) : (
          <img src={Image33_33} alt="Page 33" className="page-image-33-33" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 33 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="odd">33</section>
    </section>
  );
}

export default Page33;