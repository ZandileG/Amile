import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import Image19_19 from "../Images/Image19-19.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page19(){
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
    { text: "“Lesi sitshalo siyamangaza, kungani siluhlaza okwesibhakabhaka?” kubuza uKhaya.", start: 0, end: 6 },
  ],
  [
    { text: "“Mina ngisibona sisihle noma singajwayelekile,” kusho uAmile.", start: 7, end: 10 },
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