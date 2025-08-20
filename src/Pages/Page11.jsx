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
    { text: "“Oh, I have an idea!” exclaimed Amile,", start: 0, end: 3 },
    { text: "her eyes lighting up with excitement.", start: 4, end: 9 },
  ],
  [
    { text: "The girls ran back to Amile’s house, found a quiet patch behind the shed,", start: 10, end: 12 },
    { text: "and dug a tiny hole.", start: 13, end: 15 },
    { text: "Amile planted the seed and gently patted the dry soil around it.", start: 16, end: 18 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“O, nginecebo!” kubabaza uAmile,", start: 0, end: 3 },
    { text: "amehlo akhe ekhanya ngenjabulo.", start: 4, end: 9 },
  ],
  [
    { text: "Amantombazane agijima abuyela khabo Amile, athola indawo ethule ngemuva kwendlu,", start: 10, end: 12 },
    { text: "agubha umgodi omncane.", start: 13, end: 15 },
    { text: "UAmile watshala imbewu futhi wabambatha inhlabathi eyizungezile.", start: 16, end: 18 },
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