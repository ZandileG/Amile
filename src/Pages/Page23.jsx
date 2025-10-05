import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image23 from "../Images/Image23.png";
import Image23_23 from "../Images/Image23-23.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page23(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

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
    { text: "Amile stepped into the shed,", start: 0, end: 3 },
    { text: "reaching for the last bit of water sitting at the bottom of the water container.", start: 4, end: 9 },
    { text: "Suddenly, she heard her parents’ voices calling out to her.", start: 10, end: 12 },
  ],
  [
    { text: "“Mimi where are you?” said her mom,", start: 13, end: 14 },
    { text: "“Khaya’s here to say goodbye.”", start: 15, end: 16 },
  ],
  [
    { text: "Amile remained quiet.", start: 17, end: 18 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wangena egumbini lokugcina amanzi,", start: 0, end: 3 },
    { text: "ukuze azonisela uThingo okokugcina.", start: 4, end: 9 },
    { text: "Ngokuphazima kweso, wezwa amazwi wabazali bakhe bememeza.", start: 10, end: 12 },
  ],
  [
    { text: "“Mimi ukuphi?” kusho uma wakhe,", start: 13, end: 14 },
    { text: "“uKhaya uzile ukuzovalelisa.”", start: 15, end: 16 },
  ],
  [
    { text: "UAmile wathula.", start: 17, end: 18 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
    <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image23} alt="Page 23" className="page-image-23" />
        ) : (
          <img src={Image23_23} alt="Page 23" className="page-image-23-23" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 23 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">23</section>
    </section>
  );
}

export default Page23;