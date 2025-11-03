import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image21 from "../Images/Image21.png";
import Image21_21 from "../Images/Image21-21.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page21(){
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
      dropCap: "E",
      dropCapText: "ACH DAY,",
      lines: [
    { text: "Thingo grew taller and stranger,", start: 0, end: 8 },
    { text: "it changed colours daily and its stem twisted as if it were stretching toward the sky.", start: 9, end: 16 },
    { text: "And at night, its leaves glowed softly in the moonlight.", start: 17, end: 12.7 },
    ]
  },
    zu: {
    dropCap: "U",
    dropCapText: "SUKU NOSUKU,",
    lines: [
    { text: "uThingo wayekhula eba mude,", start: 0, end: 3.6 },
    { text: "eshintsha imibala futhi isiqu sakhe sisonteke sengathi sibheke esibhakabhakeni.", start: 3.7, end: 9.5 },
    { text: "Futhi ebusuku, amaqabunga akhe ayekhazimula ekukhanyeni kwenyanga.", start: 9.6, end: 15.2 },
      ]
    }
  };
      const { dropCap, dropCapText, lines } = transcripts[language];
      const currentTime = currentTimeRef.current;

  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
        const isActive = currentPage === 21 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

     <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image21} alt="Page 21" className="page-image-21" />
        ) : (
          <img src={Image21_21} alt="Page 21" className="page-image-21-21" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

      <section className="odd">21</section>
    </section>
  );
}

export default Page21;