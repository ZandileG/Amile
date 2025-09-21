import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import Image17_17 from "../Images/Image17-17.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page17(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(false);

   function stop(e){
    e.stopPropagation();
    e.preventDefault()
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
        paragraphs: [
  [
    { text: "But one afternoon, Amile saw a sprout poking through the soil.", start: 0, end: 5 },
    { text: "Unlike the brittle brown grass around it,", start: 6, end: 9 },
    { text: "this sprout was blue-green and sparkled in the sunlight.", start: 10, end: 13 },
  ],
  [
   { text: "Amile gasped,", start: 14, end: 15 },
    { text: "“You’re alive!”", start: 16, end: 17 },
    { text: "She then ran to Khaya’s house and brought her over to see it.", start: 18, end: 22 },
  ]
]
  },
      zu: {
        paragraphs: [
  [
    { text: "Kodwa ngenye intambama, uAmile wabona isithombo sihluma emhlabathini.", start: 0, end: 5 },
    { text: "Ngokungafani notshani obunsundu obuzungezile,", start: 6, end: 9 },
    { text: "leli hlumela laliluhlaza okwesibhakabhaka futhi likhazimula elangeni.", start: 10, end: 13 },
  ],
  [
    { text: "“Ha, uyaphila!”", start: 14, end: 15 },
    { text: "kusho uAmile ngokumangala.", start: 16, end: 17 },
    { text: "Wagijima wayolanda uKhaya kubo wamletha ukuze ayibone.", start: 18, end: 22 },
  ]
]
 }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
     <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image17} alt="Page 17" className="page-image-17" />
        ) : (
          <img src={Image17_17} alt="Page 17" className="page-image-17-17" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
 {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {        
        const isActive = currentPage === 17 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
      </p>
      ))}
   </section>

      <section className="odd">17</section>
    </section>
  );
}

export default Page17;