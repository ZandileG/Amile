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
    { text: "“Why is it blue?", start: 0, end: 2 },
    { text: "Plants aren't supposed to be blue,” said Khaya.", start: 3, end: 6 },
  ],
  [
    { text: "“I don’t know, maybe this one is special,” said Amile.", start: 7, end: 10 },
    { text: "“I want to name it Thingo,", start: 11, end: 13 },
    { text: "my little rainbow,” she continued, with a warm smile.", start: 14, end: 17 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Kungani iluhlaza okwesibhakabhaka?", start: 0, end: 2 },
    { text: "Izitshalo akufanele zibe nombala onje,” kusho uKhaya.", start: 3, end: 6 },
  ],
  [
    { text: "“Angazi, mhlawumbe lena ihlukile,” kusho uAmile.", start: 7, end: 10 },
    { text: "“Ngifuna ukuyiqamba igama elithi Thingo,", start: 11, end: 13 },
    { text: "ngoba enemibala emihle,” eqhubeka ngokumamatheka.", start: 14, end: 17 },
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
          <img src={Image1} alt="Page 1" className="page-image-1" />
        ) : (
          <img src={Image1_1} alt="Page 1" className="page-image-1-1" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

      <section className="even">20</section>
    </section>
  );
}

export default Page20;