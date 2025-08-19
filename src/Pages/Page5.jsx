import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image5 from "../Images/Image5.png";
import "../Styles/Page.css";

function Page5(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "One night, at dinner, her dad reached across the table and held her hand.", start: 0, end: 3 },
    { text: "“Mimi,” he began gently,", start: 4, end: 9 },
    { text: "“We have to leave Dumakude.”", start: 4, end: 9 },
  ],
  [
    { text: "Amile froze. Her eyes grew wide,", start: 10, end: 12 },
    { text: "searching her dad’s face for some sign that it wasn’t true.", start: 13, end: 15 },
  ],
  [
    { text: "“Mimi,” her mom said softly, “the town’s water is gone, and the food is running out.”", start: 16, end: 18 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 11 },
  ],
  [
    { text: "", start: 12, end: 13 },
    { text: "", start: 14, end: 15 },
  ],
   [
    { text: "", start: 16, end: 18 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image5} alt="Page 5" className="page-image" />
     
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

      <section className="page-5">5</section>
    </section>
  );
}

export default Page5;