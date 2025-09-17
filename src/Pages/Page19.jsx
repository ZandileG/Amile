import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import "../Styles/Page.css";

function Page19(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“It grew?” said Khaya, surprised.", start: 0, end: 3 },
  ],
  [
    { text: "“Yes, it did!", start: 4, end: 5 },
    { text: "I knew it! I knew it would grow!” exclaimed Amile.", start: 6, end: 8 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Sikhulile?” kusho uKhaya, emangele.", start: 0, end: 4 },
  ],
  [
    { text: "“Yebo, sikhulile!", start: 5, end: 6 },
    { text: "Bengazi! Bengazi ukuthi sizokhula!” kubabaza uAmile.", start: 7, end: 10 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
   <section className="page">
      <img src={Image19} alt="Page 19" className="page-image-19" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 19 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">19</section>
    </section>
  );
}

export default Page19;