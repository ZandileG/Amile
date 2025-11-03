import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import Image31_31 from "../Images/Image31-31.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page31(){
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
    { text: "People poured into the streets.", start: 0, end: 2.1 },
    { text: "Children squealed.", start: 2.2, end: 3.6 },
    { text: "The river trickled.", start: 3.7, end: 4.9 },
    { text: "Trees swayed.", start: 5, end: 6.2 },
    { text: "Birds sang.", start: 6.3, end: 7.2 },

  ],
  [
    { text: "The hills turned green again.", start: 7.3, end: 9.3 },
    { text: "Flowers pushed through the soil like fireworks.", start: 9.4, end: 12.2 },
    { text: "Gardens that hadn’t bloomed in months now burst with colour.", start: 12.3, end: 15.6 },
    { text: "The air smelled like new beginnings,", start: 15.7, end: 18 },
    { text: "as if the land itself had been holding its breath for too long.", start: 18.1, end: 22.1 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Abantu basemphakathini batheleka emigwaqweni.", start: 0, end: 3.5 },
    { text: "Izingane zamemeza.", start: 3.6, end: 5.7 },
    { text: "Umfula wagcwala.", start: 5.8, end: 7.7 },
    { text: "Izihlahla zanyakaza.", start: 7.8, end: 9.6 },
    { text: "Zacula izinyoni.", start: 9.7, end: 11.5 },
  ],
  [
    { text: "Amagquma aphenduka abe luhlaza futhi.", start: 11.6, end: 14.8 },
    { text: "Izimbali zaqhuma emhlabathini njengeziqhumane.", start: 14.9, end: 19 },
    { text: "Izingadi ezingakaze ziqhakaze ezinyangeni eziningi manje zase ziqhakaza ngemibala.", start: 19.1, end: 25.8 },
    { text: "Umoya wawunuka njengesiqalo esisha,", start: 25.9, end: 29 },
    { text: "kwakungathi umhlaba kade ubambe umphefumulo wawo isikhathi eside.", start: 29.1, end: 34 },
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
          <img src={Image31} alt="Page 31" className="page-image-31" />
        ) : (
          <img src={Image31_31} alt="Page 31" className="page-image-31-31" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 31 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">31</section>
    </section>
  );
}

export default Page31;