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
    { text: "Amile’s mom placed her hands on her hips,", start: 0, end: 3.2 },
    { text: "her face less friendly than before.", start: 3.3, end: 5.5 },
    { text: "She shook her head and said,", start: 5.6, end: 7 },
    { text: "“Uh, uh Amile, we have to go now,”", start: 7.1, end: 9.3 },
    { text: "as she reached for the plant.", start: 9.4, end: 11.1 },
    { text: "Amile pushed her mom’s hand away and covered Thingo with her arms.", start: 11.2, end: 15.2 },
   ],
   [
    { text: "Tears welled in her eyes.", start: 15.3, end: 17.5 },
    { text: "She tried to hold them back,", start: 17.6, end: 19 },
    { text: "but they tumbled down her cheeks and splashed onto the roots of the plant.", start: 19.1, end: 23.1 },
   ]
      ]
},
    zu: {
      paragraphs: [
    [    
    { text: "Uma kaAmile wabeka izandla zakhe okhalweni,", start: 0, end: 3.5 },
    { text: "ebukeka ethukuthele kunakuqala.", start: 3.6, end: 5.9 },
    { text: "Wanikina ikhanda ethi,", start: 6, end: 8 },
    { text: "“Ah, ah Amile, sekumele sihambe manje,”", start: 8.1, end: 11.2 },
    { text: "efinyelela esitshalweni.", start: 11.3, end: 13.3 },
    { text: "UAmile wasusa isandla sikama wakhe wamboza uThingo ngezingalo zakhe.", start: 13.4, end: 18.6 },
    ],
    [
    { text: "Izinyembezi zagcwala emehlweni akhe.", start: 18.7, end: 21.6 },
    { text: "Wazama ukuzibamba,", start: 21.7, end: 22.6 },
    { text: "kodwa zawa ezihlathini zakhe zafafaza ezimpandeni zesitshalo.", start: 22.7, end: 27.4 },
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