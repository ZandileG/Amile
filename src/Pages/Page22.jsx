import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "On moving day,", start: 0, end: 2 },
    { text: "Amile quietly slipped out of the house, her heart heavy, as she made her way towards Thingo.", start: 3, end: 9 },
  ],
  [
    { text: "Dropping to her knees, she whispered, “I don’t want to leave you,”", start: 10, end: 12 },
    { text: "gently brushing her fingers over Thingo’s leaves.", start: 13, end: 16 },
    { text: "“I love talking to you…", start: 17, end: 18 },
    { text: "and I love looking after you,” she sighed.", start: 19, end: 22 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngosuku lokuthutha,", start: 0, end: 2 },
    { text: "uAmile waphumela ngaphandle, ngenhliziyo ebuhlungu, eyokhuluma noThingo.", start: 3, end: 6 },
  ],
  [
    { text: "“Angifuni ukukushiya,” washo ngezwi eliphansi,", start: 7, end: 9 },
    { text: "ehambisa iminwe yakhe ngobumnene kwelinye lamaqabunga.", start: 10, end: 13 },
    { text: "“Ngiyathanda ukukhuluma nawe", start: 14, end: 16 },
    { text: "futhi ngiyathanda ukukunakekela,” eqhubeka.", start: 17, end: 19 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;
  
  return(
    <section className="page">
      <img src={Image22} alt="Page 22" className="page-image-22" />

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

      <section className="even">22</section>
    </section>
  );
}

export default Page22;