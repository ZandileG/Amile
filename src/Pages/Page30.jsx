import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "People poured into the streets.", start: 0, end: 3 },
    { text: "Children squealed.", start: 4, end: 9 },
    { text: "The river trickled.", start: 10, end: 12 },
    { text: "Trees swayed.", start: 13, end: 15 },
    { text: "Birds sang.", start: 16, end: 18 },
    { text: "The hills turned green again.", start: 19, end: 21 },
    { text: "Flowers pushed through the soil like fireworks.", start: 10, end: 12 },
    { text: "Gardens that hadn’t bloomed in months now burst with colour.", start: 10, end: 12 },
    { text: "The air smelled like new beginnings", start: 10, end: 12 },
    { text: "as if the land itself had been holding its breath for too long.", start: 10, end: 12 },
  ],
  [
    { text: "Thingo had awakened something in the town,", start: 13, end: 15 },
    { text: "magic that was thought to be gone.", start: 16, end: 18 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 10, end: 12 },
  ],
  [
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image30} alt="Page 30" className="page-image" />
  
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

      <section className="page-30">30</section>
    </section>
  );
}

export default Page30;