import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image5 from "../Images/Image5.png";
import Image5_5 from "../Images/Image5-5.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page5(){
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
    { text: "One night, at dinner, her dad reached across the table and held her hand.", start: 0, end: 5.4 },
    { text: "“Mimi,” he began gently,", start: 5.5, end: 8.0 },
    { text: "“we have to leave Dumakude.”", start: 8.1, end: 10.5 },
  ],
  [
    { text: "Amile froze. Her eyes grew wide,", start: 10.6, end: 13.3 },
    { text: "searching her dad’s face for some sign that it wasn’t true.", start: 13.4, end: 17.0 },
  ],
   [
    { text: "“Mimi,” said her mom, holding Amile’s other hand,", start: 17.1, end: 21.8 },
    { text: "“the town’s water is gone, and the food is running out.”", start: 21.9, end: 25.8 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngobunye ubusuku, ngesikhathi sesidlo sakusihlwa, ubab’wakhe welula isandla sakhe ebamba esikaAmile.", start: 0, end: 5.4 },
    { text: "“Mimi,” washo ngesineke,", start: 5.5, end: 8.0 },
    { text: "“kufanele sihambe eDumakude.”", start: 8.1, end: 10.5 },
  ],
  [
    { text: "UAmile wanganyakazi. Amehlo akhe akhula,", start: 10.6, end: 13.3 },
    { text: "efuna ebusweni bukayise isibonakaliso sokuthi kwakungelona iqiniso.", start: 13.4, end: 17.0 },
  ],
  [
    { text: "“Mimi,” kusho uma wakhe ngomoya ophansi,", start: 17.1, end: 21.8 },
    { text: "“amanzi awasekho futhi nokudla sekuyaphela.”", start: 21.9, end: 25.8 },
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
          <img src={Image5} alt="Page 5" className="page-image-5" />
        ) : (
          <img src={Image5_5} alt="Page 5" className="page-image-5-5" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 5 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">5</section>
    </section>
  );
}

export default Page5;