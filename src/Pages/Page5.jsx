import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image5 from "../Images/Image5.png";
import "../Styles/Page.css";

function Page5(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "One night, at dinner, her dad reached across the table and held her hand.", start: 106, end: 110 },
    { text: "“Mimi,” he began gently,", start: 111, end: 115 },
    { text: "“We have to leave Dumakude.”", start: 116, end: 120 },
  ],
  [
    { text: "Amile froze. Her eyes grew wide,", start: 121, end: 123 },
    { text: "searching her dad’s face for some sign that it wasn’t true.", start: 124, end: 126 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngobunye ubusuku, ngesikhathi sesidlo sakusihlwa, ubab’wakhe welula isandla sakhe ebamba esikaAmile.", start: 106, end: 110 },
    { text: "“Mimi,” washo ngesineke,", start: 111, end: 115 },
    { text: "“kufanele sihambe eDumakude.”", start: 116, end: 120 },
  ],
  [
    { text: "UAmile wanganyakazi. Amehlo akhe akhula,", start: 121, end: 123 },
    { text: "efuna ebusweni bukayise isibonakaliso sokuthi kwakungelona iqiniso.", start: 124, end: 126 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image5} alt="Page 5" className="page-image-5" />
     
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

      <section className="page-5">5</section>
    </section>
  );
}

export default Page5;