import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image11 from "../Images/Image11.png";
import Image11_11 from "../Images/Image11-11.png";
import "../Styles/Page.css";

function Page11(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“Oh, I have an idea!” exclaimed Amile,", start: 0, end: 4 },
    { text: "her eyes lighting up with excitement.", start: 5, end: 8 },
  ],
  [
    { text: "The girls ran back to Amile’s house, found a quiet patch behind the shed,", start: 9, end: 11 },
    { text: "and dug a tiny hole.", start: 12, end: 13 },
    { text: "Amile planted the seed and gently patted the dry soil around it.", start: 14, end: 16 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“O, nginecebo!” kubabaza uAmile,", start: 0, end: 4 },
    { text: "amehlo akhe ekhanya ngenjabulo.", start: 5, end: 8 },
  ],
  [
    { text: "Amantombazane agijima abuyela khabo Amile, athola indawo ethule ngemuva kwendlu,", start: 9, end: 11 },
    { text: "agubha umgodi omncane.", start: 12, end: 13 },
    { text: "UAmile watshala imbewu futhi wabambatha inhlabathi eyizungezile.", start: 14, end: 16 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image11} alt="Page 11" className="page-image-11" />
      <img src={Image11_11} alt="Page 11" className="page-image-11-11" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 11 && currentTime >= line.start && currentTime <= line.end;
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