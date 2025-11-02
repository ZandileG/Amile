import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image23 from "../Images/Image23.png";

import "../Styles/Page.css";

function Page23(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);

    const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);
  
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
    { text: "UAmile wangena egumbini lokugcina amanzi,", start: 0, end: 3.1 },
    { text: "ukuze azonisela uThingo okokugcina.", start: 3.2, end: 5.4 },
    { text: "Ngokuphazima kweso, wezwa amazwi wabazali bakhe bememeza.", start: 5.5, end: 9.9 },
  ],
  [
    { text: "“Mimi ukuphi?” kusho uma wakhe,", start: 10, end: 14.1 },
    { text: "“uKhaya uzile ukuzovalelisa.”", start: 14.2, end: 16.8 },
  ],
  [
    { text: "UAmile wathula.", start: 16.9, end: 19 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <img src={Image23} alt="Page 23" className="page-image-23" />

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