import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image26 from "../Images/Image26.png";
import Image26_26 from "../Images/Image26-26.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page26(){
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
     en: {
      paragraphs: [
   [    
    { text: "Amile’s mom placed her hands on her hips,", start: 0, end: 4 },
    { text: "her face less friendly than before.", start: 5, end: 7 },
    { text: "She shook her head and said,", start: 8, end: 10 },
    { text: "“Uh, uh Amile, we have to go now,”", start: 11, end: 13 },
    { text: "as she reached for the plant.", start: 14, end: 16 },
    { text: "Amile pushed her mom’s hand away and covered Thingo with her arms.", start: 17, end: 21 },
   ],
   [
    { text: "Tears welled in her eyes.", start: 22, end: 23 },
    { text: "She tried to hold them back,", start: 24, end: 26 },
    { text: "but they tumbled down her cheeks and splashed onto the roots of the plant.", start: 27, end: 30 },
   ]
      ]
},
    zu: {
      paragraphs: [
    [    
    { text: "Uma kaAmile wabeka izandla zakhe okhalweni,", start: 0, end: 4 },
    { text: "ebukeka ethukuthele kunakuqala.", start: 5, end: 7 },
    { text: "Wanikina ikhanda ethi,", start: 8, end: 10 },
    { text: "“Ah, ah Amile, sekumele sihambe manje,”", start: 11, end: 13 },
    { text: "kusho unina, efinyelela esitshalweni.", start: 14, end: 16 },
    { text: "UAmile wasusa isandla sikama wakhe wamboza uThingo ngezingalo zakhe.", start: 17, end: 21 },
    ],
    [
    { text: "Izinyembezi zagcwala emehlweni akhe.", start: 22, end: 23 },
    { text: "Wazama ukuzibamba,", start: 24, end: 28 },
    { text: "kodwa zawa ezihlathini zakhe zafafaza ezimpandeni zesitshalo.", start: 29, end: 32 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
   <section className="page">
   <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image26} alt="Page 26" className="page-image-26" />
        ) : (
          <img src={Image26_26} alt="Page 26" className="page-image-26-26" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 26 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="even">26</section>
    </section>

  );
}

export default Page26;