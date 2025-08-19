import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = [
  [
    { text: "On moving day,", start: 0, end: 3 },
    { text: "Amile sneaked out of the house to talk to Thingo.", start: 4, end: 9 },
  ],
  [
    { text: "“I don’t want to leave you,” she whispered,", start: 10, end: 12 },
    { text: "brushing her fingers gently over one of its leaves.", start: 13, end: 15 },
    { text: "“Even though you're just a plant, you’re still my friend.", start: 16, end: 18 },
    { text: "I love talking to you, I love looking after you,” she sighed.", start: 19, end: 21 },
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