import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image15 from "../Images/Image15.png";
import Image15_15 from "../Images/Image15-15.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page15(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

   function stop(e){
    e.stopPropagation();
  //e.preventDefault()
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation){
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  function handleToggle(e){
    stop(e);
    setFlipped((prev) => !prev);
  };

  const transcripts = {
     en: {
      dropCap: "E",
      dropCapText: "VERY MORNING,",
      lines:[
    { text: "Amile sneaked outside with a cup of water and poured it over the plant's soil.", start: 0, end: 8 },
    { text: "Her parents would have been angry if they found out,", start: 9, end: 15 },
    { text: "but she couldn’t help it,", start: 16, end: 18 },
    { text: "she needed to know what the seed would become.", start: 19, end: 21 },
    ]
  },
    zu: {
    dropCap: "N",
    dropCapText: "JALO EKUSENI,",
    lines: [
    { text: "uAmile wayenyonyoba ngaphandle nenkomishi yamanzi ukuyonisela isitshalo.", start: 0, end: 8 },
    { text: "Abazali bakhe babeyothukuthela kabi uma bengamthola,", start: 9, end: 15 },
    { text: "kodwa wayengakwazi ukuzibamba,", start: 16, end: 18 },
    { text: "wayedinga ukwazi ukuthi leyo mbewu izoba yini.", start: 19, end: 21 },
      ]
    }
  };
      const { dropCap, dropCapText, lines } = transcripts[language];
  
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
        const isActive = currentPage === 15 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

    <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image15} alt="Page 15" className="page-image-15" />
        ) : (
          <img src={Image15_15} alt="Page 15" className="page-image-15-15" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      <section className="odd">15</section>
    </section>
  );
}

export default Page15;