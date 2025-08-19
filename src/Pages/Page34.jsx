import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image34 from "../Images/Image34.png";
import "../Styles/Page.css";

function Page34(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "Amile approached Thingo,", start: 0, end: 3 },
    { text: "now a tall, blossoming tree with silver-blue petals and a soft glow pulsing in its trunk.", start: 4, end: 9 },
    { text: "Her eyes sparkled with happiness as she wrapped her arms around it.", start: 10, end: 12 },
  ],
  [
    { text: "“Thank you Thingo,” she whispered,", start: 13, end: 15 },
    { text: "I'm so glad I get to stay here with you.”", start: 16, end: 18 },
  ]
    ],
      end: [
      { text: "The End!"},
    ]
},
      zu: {
      paragraphs: [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
  ],
  [
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ]
],
     end: [
      { text: "Isiphetho!"},
    ]
    }
};
    const { paragraphs, end } = transcripts[language];

  return(
    <section className="page">
    <img src={Image34} alt="Page 34" className="page-image" />

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

      <section className="end">{end[0].text}</section>

      <section className="page-34">34</section>
    </section>
  );
}

export default Page34;