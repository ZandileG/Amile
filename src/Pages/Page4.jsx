import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image4 from "../Images/Image4.png";
import Image4_4 from "../Images/Image4-4.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page4(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);
  
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
    { text: "Every evening, Amile sat on the stoep of her house,", start: 0, end: 4.4 },
    { text: "watching the wind dance with the dust.", start: 4.5, end: 7.1 },
    { text: "She missed the scent of damp, red dirt and the gentle growl of thunder,", start: 7.2, end: 12.4 },
    { text: "which used to give her a little fright, but now, it felt like a song she longed to hear again.", start: 12.5, end: 19 },
  ],
  [
    { text: "Amile also missed the days when she and her best friend Khaya splashed around in muddy puddles", start: 20, end: 25.8 },
    { text: "and played hide-and-seek in the backyard, their laughter rising higher than the clouds.", start: 25.9, end: 32.4 },
   ]
  ]
  },
     zu: {
      paragraphs: [
  [
    { text: "Njalo kusihlwa, uAmile wayehlala ngaphandle,", start: 0, end: 4.4 },
    { text: "ebuka umoya udanisa nothuli.", start: 4.5, end: 7.1 },
    { text: "Wayekhumbula iphunga lokuswakama, kanye nokuduma kwezulu, okwakuvame ukumethusa kancane,", start: 7.2, end: 12.4 },
    { text: "kodwa manje, kwakuyiculo wayefisa ukulizwa futhi.", start: 12.5, end: 19 },
  ],
  [
    { text: "Wayekhumbula futhi nezinsuku lapho yena nomngani wakhe omkhulu uKhaya bechaphazana odakeni", start: 20, end: 25.8 },
    { text: "futhi bedlala umacashelana ngemuva kwendlu, uhleko lwabo lukhuphuka ngaphezu kwamafu.", start: 25.9, end: 32.4 },
  ]
]
     }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
    <section className="page-text">
     {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {        
        const isActive = currentPage === 4 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "} 
            </span>
        );
      })}
    </p>
    ))}
    </section>

      <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image4} alt="Page 4" className="page-image-4" />
        ) : (
          <img src={Image4_4} alt="Page 4" className="page-image-4-4" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      
      <section className="even">4</section>
    </section>
  );
}

export default Page4;