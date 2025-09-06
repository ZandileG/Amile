import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
   [
    { text: "“But…I’m not wasting water!”", start: 97, end: 99 },
    { text: "Amile shouted. “Thingo is my friend.”", start: 100, end: 102 },
  ],
   [
    { text: "“Your friend?” said Khaya", start: 103, end: 105 },
    { text: "eyes narrowed with her arms across her chest.", start: 106, end: 108 },
  ]
      ]
},
      zu: {
      paragraphs: [
    [
    { text: "“Kodwa...akuwona ukhula!” kusho uAmile ememeza.", start: 97, end: 99 },
    { text: "“UThingo ungumngane wami.”", start: 100, end: 102 },
  ],
  [
    { text: "“UMngane wakho?” kusho uKhaya, ubuso bumuncu.", start: 103, end: 105 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-odd">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 25 && currentTime >= line.start && currentTime <= line.end;
        return (
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

    <img src={Image25} alt="Page 25" className="page-image-25" />

      <section className="page-25">25</section>
    </section>
  );
}

export default Page25;