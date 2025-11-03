import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image24 from "../Images/Image24.png";
import Image24_24 from "../Images/Image24-24.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page24(){
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
    { text: "Khaya knew where Amile was,", start: 0, end: 3 },
    { text: "and she showed Amile’s parents where she was hiding.", start: 4, end: 8 },
    { text: "They found her behind the shed, pouring water onto Thingo’s soil.", start: 9, end: 13 },
  ],
  [
    { text: "“Amile,” her dad sighed,", start: 14, end: 15 },
    { text: "“what are you doing?", start: 16, end: 17 },
    { text: "We told you that saving water is important.", start: 18, end: 20 },
    { text: "You can’t be wasting it like this.”", start: 21, end: 20.5 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UKhaya bekazi ukuthi uAmile ukuphi,", start: 0, end: 2.8 },
    { text: "futhi wakhombisa abazali bakaAmile lapho ayecashe khona.", start: 2.9, end: 6.2 },
    { text: "Bamthola ethela amanzi enhlabathini kaThingo.", start: 6.3, end: 9.1 },
  ],
    [
    { text: "“Amile,” kusho ubab’ wakhe,", start: 9.2, end: 12.5 },
    { text: "“wenzani? Sakutshela ukuthi ukonga amanzi kubalulekile.", start: 12.6, end: 15.9 },
    { text: "Awukwazi ukuwachitha kulokhula.”", start: 16, end: 18.7 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 24 && currentTime >= line.start && currentTime <= line.end;
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
          <img src={Image24} alt="Page 24" className="page-image-24" />
        ) : (
          <img src={Image24_24} alt="Page 24" className="page-image-24-24" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>


      <section className="even">24</section>
    </section>
  );
}

export default Page24;