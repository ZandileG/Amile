import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image18 from "../Images/Image18.png";
import Image18_18 from "../Images/Image18-18.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page18(){
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
    e.stopPropagation();
    setFlipped((prev) => !prev);
  };
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“It grew?” said Khaya, surprised.", start: 0, end: 3 },
  ],
  [
    { text: "“Yes, it did!", start: 4, end: 5 },
    { text: "I knew it! I knew it would grow!” exclaimed Amile.", start: 6, end: 8 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Sikhulile?” kusho uKhaya, emangele.", start: 0, end: 4 },
  ],
  [
    { text: "“Yebo, sikhulile!", start: 5, end: 6 },
    { text: "Bengazi! Bengazi ukuthi sizokhula!” kubabaza uAmile.", start: 7, end: 10 },
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
        const isActive = currentPage === 18 && currentTime >= line.start && currentTime <= line.end;
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
          <img src={Image18} alt="Page 18" className="page-image-18" />
        ) : (
          <img src={Image18_18} alt="Page 18" className="page-image-18-18" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      <section className="even">18</section>
    </section>
  );
}

export default Page18;