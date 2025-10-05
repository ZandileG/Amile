import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import Image9_9 from "../Images/Image9-9.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page9(){
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
    { text: "Amile picked it up, cupped it in her hands and gasped,", start: 0, end: 5.8 },
    { text: "“It looks like that thing that makes plants.”", start: 5.9, end: 8.8 },
  ],
  [
    { text: "“You mean a seed?” asked Khaya.", start: 8.9, end: 12.4 },
  ],
  [
    { text: "“Yes!” said Amile. “Let's plant it and see what kind of flower it becomes.”", start: 12.5, end: 19.8 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wayicosha ngobunene wase ethi,", start: 0, end: 5.8 },
    { text: "“Ibukeka njengalento eyenza izitshalo.”", start: 5.9, end: 8.8 },
  ],
  [
    { text: "“Usho imbewu?” kubuza uKhaya.", start: 8.9, end: 12.4 },
  ],
  [
    { text: "“Yebo!” kusho uAmile. “Masiyitshale, sizobona ukuthi iba uhlobo luni lwembali.”", start: 12.5, end: 19.8 },
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
      <img src={Image9} alt="Page 9" className="page-image-9" />
        ) : (
      <img src={Image9_9} alt="Page 9" className="page-image-9-9" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 9 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">9</section>
    </section>
  );
}

export default Page9;