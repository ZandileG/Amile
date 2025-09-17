import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
   [
    { text: "“But…I’m not wasting water!”", start: 0, end: 2 },
    { text: "Amile shouted. “Thingo is my friend.”", start: 3, end: 5 },
  ],
   [
    { text: "“Your friend? What about me?” said Khaya, folding her arms.", start: 6, end: 8 },
    { text: "eyes narrowed with her arms across her chest.", start: 9, end: 11 },
  ]
      ]
},
      zu: {
      paragraphs: [
    [
    { text: "“Kodwa...akuwona ukhula!” kusho uAmile ememeza.", start: 0, end: 2 },
    { text: "“UThingo ungumngane wami.”", start: 3, end: 5 },
  ],
  [
    { text: "“UMngane wakho? Kanti angiyena yin umngane wakho?” kusho uKhaya, ubuso bumuncu.", start: 6, end: 8 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 25 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <img src={Image25} alt="Page 25" className="page-image-25" />

      <section className="odd">25</section>
    </section>
  );
}

export default Page25;