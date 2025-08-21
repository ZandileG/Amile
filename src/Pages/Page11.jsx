import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image11 from "../Images/Image11.png";
import "../Styles/Page.css";

function Page11(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“Oh, I have an idea!” exclaimed Amile,", start: 80, end: 85 },
    { text: "her eyes lighting up with excitement.", start: 86, end: 91 },
  ],
  [
    { text: "The girls ran back to Amile’s house, found a quiet patch behind the shed,", start: 92, end: 94 },
    { text: "and dug a tiny hole.", start: 95, end: 97 },
    { text: "Amile planted the seed and gently patted the dry soil around it.", start: 98, end: 100 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“O, nginecebo!” kubabaza uAmile,", start: 80, end: 85 },
    { text: "amehlo akhe ekhanya ngenjabulo.", start: 86, end: 91 },
  ],
  [
    { text: "Amantombazane agijima abuyela khabo Amile, athola indawo ethule ngemuva kwendlu,", start: 92, end: 94 },
    { text: "agubha umgodi omncane.", start: 95, end: 97 },
    { text: "UAmile watshala imbewu futhi wabambatha inhlabathi eyizungezile.", start: 98, end: 100 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image11} alt="Page 11" className="page-image" />
   
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

      <section className="page-11">11</section>
    </section>
  );
}

export default Page11;