import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image22 from "../Images/Image22.png";
import Image22_22 from "../Images/Image22-22.png";
import "../Styles/Page.css";

function Page22(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "On moving day,", start: 0, end: 2 },
    { text: "Amile sneaked out of the house to talk to Thingo.", start: 3, end: 6 },
  ],
  [
    { text: "“I don’t want to leave you,” she whispered,", start: 7, end: 9 },
    { text: "brushing her fingers gently over one of its leaves.", start: 10, end: 13 },
    { text: "“Even though you're just a plant, you’re still my friend.", start: 14, end: 16 },
    { text: "I love talking to you, I love looking after you,” she sighed.", start: 17, end: 19 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngosuku lokuthutha,", start: 0, end: 2 },
    { text: "uAmile waphumela ngaphandle eyokhuluma noThingo.", start: 3, end: 6 },
  ],
  [
    { text: "“Angifuni ukukushiya,” washo ngezwi eliphansi,", start: 7, end: 9 },
    { text: "ehambisa iminwe yakhe ngobumnene kwelinye lamaqabunga.", start: 10, end: 13 },
    { text: "“Noma uyisitshalo nje, usengumngane wami.", start: 14, end: 16 },
    { text: "Ngiyathanda ukukhuluma nawe futhi ngiyathanda ukukunakekela,” eqhubeka.", start: 17, end: 19 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
  
  return(
    <section className="page-even">
      <img src={Image22} alt="Page 22" className="page-image-22" />
      <img src={Image22_22} alt="Page 22" className="page-image-22-22" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 22 && currentTime >= line.start && currentTime <= line.end;
        return(
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