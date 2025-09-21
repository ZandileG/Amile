import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image20 from "../Images/Image20.png";
import Image20_20 from "../Images/Image20-20.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page20(){
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
    stop(e);
    setFlipped((prev) => !prev);
  };

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“I want to name it Thingo,", start: 0, end: 2 },
    { text: "my little rainbow,” she continued, with a warm smile.", start: 3, end: 6 },
  ],
  [
    { text: "", start: 11, end: 13 },
    { text: "", start: 14, end: 17 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Ngifuna ukuyiqamba igama elithi Thingo,", start: 0, end: 2 },
    { text: "ngoba enemibala emihle,” eqhubeka ngokumamatheka.", start: 3, end: 6 },
  ],
  [
    { text: "", start: 11, end: 13 },
    { text: "", start: 14, end: 17 },
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
        const isActive = currentPage === 19 && currentTime >= line.start && currentTime <= line.end;
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
          <img src={Image20} alt="Page 20" className="page-image-20" />
        ) : (
          <img src={Image20_20} alt="Page 20" className="page-image-20-20" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

      <section className="even">20</section>
    </section>
  );
}

export default Page20;