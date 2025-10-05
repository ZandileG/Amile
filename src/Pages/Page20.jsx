import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image20 from "../Images/Image20.png";
import "../Styles/Page.css";

function Page20(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“I want to name it Thingo, cause it's so colourful and sparkly,” Amile continued.", start: 0, end: 3 },
  ],
  [
    { text: "“Oh yes, that’s a very nice name,” replied Khaya. “But don’t you think we’ll get into trouble for this?”", start: 4, end: 6 },
  ],
    [
    { text: "“No, we won’t we just have to keep it a secret and make sure Thingo survives,” said Amile.", start: 7, end: 10 },
  ],
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Ngifuna ukusiqamba igama elithi Thingo,", start: 0, end: 2 },
    { text: "ngoba sinemibala emihle,” kusho uAmile.", start: 3, end: 6 },
  ],
  [
    { text: "“Yebo, igama elihle kakhulu lelo,” kuphendula uKhaya. “Kodwa awucabangi ukuthi singangena enkingeni ngalokhu?”", start: 7, end: 10 },
  ],
  [
    { text: "Ngeke singene enkingeni uma singayigcina njengemfihlo futhi siqinisekise ukuthi uThingo uyaphila,” kusho uAmile.", start: 11, end: 13 },
  ],
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
        const currentTime = currentTimeRef.current;
        const isActive = currentPage === 20 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <img src={Image20} alt="Page 20" className="page-image-20" />

      <section className="even">20</section>
    </section>
  );
}

export default Page20;