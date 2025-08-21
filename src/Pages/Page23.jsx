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
    { text: "Amile stepped into the shed,", start: 47, end: 50 },
    { text: "reaching for the last bit of water sitting at the bottom of the water container.", start: 51, end: 56 },
    { text: "Suddenly, she heard her parents’ voices calling out to her.", start: 57, end: 59 },
  ],
  [
    { text: "“Mimi where are you?” said her mom,", start: 60, end: 62 },
    { text: "“Khaya’s here to say goodbye.”", start: 63, end: 65 },
    { text: "Amile said nothing.", start: 66, end: 68 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wangena egumbini lokugcina amanzi,", start: 47, end: 50 },
    { text: "ukuze azonisela uThingo okokugcina.", start: 51, end: 56 },
    { text: "Ngokuphazima kweso, wezwa amazwi wabazali bakhe bememeza.", start: 57, end: 59 },
  ],
  [
    { text: "“Mimi ukuphi?” kusho uma wakhe,", start: 60, end: 62 },
    { text: "“uKhaya uzile ukuzovalelisa.”", start: 63, end: 65 },
    { text: "UAmile wathula.", start: 66, end: 68 },
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