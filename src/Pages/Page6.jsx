import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = [
  [
    { text: "“But what about our neighbours? What about my friends?", start: 0, end: 3 },
    { text: "I don’t want to leave Khaya.” said Amile with tears in her eyes.", start: 4, end: 9 },
  ],
  [
    { text: "“I know it’s hard Mimi, but we can’t stay here anymore. Please understand,”", start: 10, end: 12 },
    { text: "said her dad while gently squeezing her hand.", start: 13, end: 15 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 16, end: 18 },
  ]
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
]
    }
};

  const transcript = transcripts[language];

  return(
    <section className="page">
    <section className="page-text">
    {transcript.map((paragraph, pIndex) => (
    <p key={pIndex}>
      {paragraph.map((line, i) => {
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

    <img src={Image6} alt="Page 6" className="page-image" />

      <section className="page-6">6</section>
    </section>
  );
}

export default Page6;