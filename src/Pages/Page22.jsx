import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "On moving day,", start: 25, end: 28 },
    { text: "Amile sneaked out of the house to talk to Thingo.", start: 29, end: 34 },
  ],
  [
    { text: "“I don’t want to leave you,” she whispered,", start: 35, end: 37 },
    { text: "brushing her fingers gently over one of its leaves.", start: 38, end: 40 },
    { text: "“Even though you're just a plant, you’re still my friend.", start: 41, end: 43 },
    { text: "I love talking to you, I love looking after you,” she sighed.", start: 44, end: 46 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngosuku lokuthutha,", start: 25, end: 28 },
    { text: "uAmile waphumela ngaphandle eyokhuluma noThingo.", start: 29, end: 34 },
  ],
  [
    { text: "“Angifuni ukukushiya,” washo ngezwi eliphansi,", start: 35, end: 37 },
    { text: "ehambisa iminwe yakhe ngobumnene kwelinye lamaqabunga.", start: 38, end: 40 },
    { text: "“Noma uyisitshalo nje, usengumngane wami.", start: 41, end: 43 },
    { text: "Ngiyathanda ukukhuluma nawe futhi ngiyathanda ukukunakekela,” eqhubeka.", start: 44, end: 46 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
  
  return(
    <section className="page">
      <img src={Image22} alt="Page 22" className="page-image" />

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

      <section className="page-22">22</section>
    </section>
  );
}

export default Page22;