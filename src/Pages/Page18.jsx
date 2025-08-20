import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image18 from "../Images/Image18.png";
import "../Styles/Page.css";

function Page18(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“It grew?” said Khaya, surprised.", start: 0, end: 3 },
  ],
  [
    { text: "“Yes, it did!", start: 10, end: 12 },
    { text: "I knew it! I knew it would grow!” exclaimed Amile.", start: 13, end: 15 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Sikhulile?” kusho uKhaya, emangele.", start: 0, end: 3 },
  ],
  [
    { text: "“Yebo, sikhulile!", start: 4, end: 9 },
    { text: "Bengazi! Bengazi ukuthi sizokhula!” kubabaza uAmile.", start: 10, end: 12 },
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

    <img src={Image18} alt="Page 18" className="page-image" />

      <section className="page-18">18</section>
    </section>
  );
}

export default Page18;