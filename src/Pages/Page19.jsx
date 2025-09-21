import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import Image19_19 from "../Images/Image19-19.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page19(){
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
    { text: "“This plant is so weird, why is it blue?” asked Khaya, scrunching up her face in confusion.", start: 0, end: 6 },
  ],
  [
    { text: "“It’s not weird, it’s pretty,” said Amile, not taking her eyes off it.", start: 7, end: 10 },
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
    { text: "“Angazi, mhlawumbe lena ihlukile,” kusho uAmile egqolozele lesitshalo esimangazayo.", start: 7, end: 10 },
  ]
]
 }
 };
    const { paragraphs } = transcripts[language];

  return(
   <section className="page">
  <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image19} alt="Page 19" className="page-image-19" />
        ) : (
          <img src={Image19_19} alt="Page 19" className="page-image-19-19" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

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

      <section className="odd">19</section>
    </section>
  );
}

export default Page19;