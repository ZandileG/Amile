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
    { text: "Amile quietly slipped out of the house, her heart heavy, as she made her way towards Thingo.", start: 3, end: 6 },
  ],
  [
    { text: "Dropping to her knees, she whispered, “I don’t want to leave you,”", start: 7, end: 9 },
    { text: "gently brushing her fingers over Thingo’s leaves.", start: 10, end: 13 },
    { text: "“You’re the only one who really listens to me. I love talking to you…", start: 14, end: 16 },
    { text: "and I love looking after you,” she sighed.", start: 17, end: 19 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngosuku lokuthutha,", start: 0, end: 2 },
    { text: "uAmile waphumela ngaphandle, ngenhiziyo ebuhlungu, eyokhuluma noThingo.", start: 3, end: 6 },
  ],
  [
    { text: "“Angifuni ukukushiya,” washo ngezwi eliphansi,", start: 7, end: 9 },
    { text: "ehambisa iminwe yakhe ngobumnene kwelinye lamaqabunga.", start: 10, end: 13 },
    { text: "“Nguwena kuphela ongilalelayo…Ngiyathanda ukukhuluma nawe", start: 14, end: 16 },
    { text: "futhi ngiyathanda ukukunakekela,” eqhubeka.", start: 17, end: 19 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
  
  return(
    <section className="page">
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

      <section className="even">22</section>
    </section>
  );
}

export default Page22;