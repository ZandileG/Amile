import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image23 from "../Images/Image23.png";
import "../Styles/Page.css";

function Page23(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "Amile stepped into the shed,", start: 0, end: 3 },
    { text: "reaching for the last bit of water sitting at the bottom of the water container.", start: 4, end: 9 },
    { text: "Suddenly, she heard her parents’ voices calling out to her.", start: 10, end: 12 },
  ],
  [
    { text: "“Mimi where are you?” said her mom,", start: 13, end: 15 },
    { text: "“Khaya’s here to say goodbye.”", start: 16, end: 18 },
    { text: "Amile said nothing.", start: 16, end: 18 },
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
    { text: "“Mimi ukuphi?” kusho uma wakhe,", start: 13, end: 15 },
    { text: "“uKhaya uzile ukuzovalelisa.”", start: 16, end: 18 },
    { text: "UAmile wathula.", start: 16, end: 18 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image23} alt="Page 23" className="page-image" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentTime >= line.start && currentTime <= line.end;
        return (
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="page-23">23</section>
    </section>
  );
}

export default Page23;