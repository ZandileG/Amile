import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image11 from "../Images/Image11.png";
import Image11_11 from "../Images/Image11-11.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page11(){
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
    { text: "“Oh, I have an idea, follow me!” exclaimed Amile,", start: 0, end: 6.2 },
    { text: "her eyes lighting up with excitement.", start: 6.3, end: 8.8 },
  ],
  [
    { text: "Amile ran back to her house with Khaya following closely behind her.", start: 8.9, end: 14.4 },
    { text: "They found an empty garden patch behind the shed and dug a tiny hole.", start: 14.5, end: 19.9 },
    { text: "They then placed the seed in the hole, covered it, and gently patted the dry soil around it.", start: 20, end: 27.4 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“O, nginecebo, ngilandele!” kubabaza uAmile,", start: 0, end: 6.2 },
    { text: "amehlo akhe ekhanya ngenjabulo.", start: 6.3, end: 8.8 },
  ],
  [
    { text: "UAmile wagijima ebuyela ejalidini lakubo, uKhaya elandela emva kwakhe.", start: 8.9, end: 14.4 },
    { text: "Uma befika, bathole isichibi esingenalutho ebaleni, bagubha umgodi omncane.", start: 14.5, end: 19.9 },
    { text: "Batshala imbewu futhi babambatha nenhlabathi eyizungezile.", start: 20, end: 27.4 },
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
          <img src={Image11} alt="Page 11" className="page-image-11" />
        ) : (
          <img src={Image11_11} alt="Page 11" className="page-image-11-11" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 11 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">11</section>
    </section>
  );
}

export default Page11;