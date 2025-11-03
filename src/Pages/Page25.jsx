import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
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
    { text: "“But…I’m not wasting water!”", start: 0, end: 3.7 },
    { text: "Amile shouted. “Thingo is my friend.”", start: 3.8, end: 7.4 },
  ],
   [
    { text: "“Your friend? What about me?” said Khaya,", start: 7.5, end: 12.8 },
    { text: "her eyes narrowed with her arms across her chest.", start: 12.9, end: 16.6 },
  ]
      ]
},
      zu: {
      paragraphs: [
    [
    { text: "“Kodwa...akuwona ukhula!” kusho uAmile ememeza.", start: 0, end: 6.4 },
    { text: "“UThingo ungumngani wami.”", start: 6.5, end: 9.1 },
  ],
  [
    { text: "“UMngani wakho? Kanti angiyena yini umngani wakho mina?” kusho uKhaya, ubuso bumuncu.", start: 9.2, end: 18.5 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

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