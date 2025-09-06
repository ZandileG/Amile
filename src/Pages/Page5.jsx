import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image5 from "../Images/Image5.png";
import Image5_5 from "../Images/Image5-5.png";
import "../Styles/Page.css";

function Page5(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "One night, at dinner, her dad reached across the table and held her hand.", start: 0, end: 5 },
    { text: "“Mimi,” he began gently,", start: 6, end: 8 },
    { text: "“We have to leave Dumakude.”", start: 9, end: 11 },
  ],
  [
    { text: "Amile froze. Her eyes grew wide,", start: 12, end: 14 },
    { text: "searching her dad’s face for some sign that it wasn’t true.", start: 15, end: 18 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngobunye ubusuku, ngesikhathi sesidlo sakusihlwa, ubab’wakhe welula isandla sakhe ebamba esikaAmile.", start: 0, end: 6 },
    { text: "“Mimi,” washo ngesineke,", start: 7, end: 11 },
    { text: "“kufanele sihambe eDumakude.”", start: 12, end: 16 },
  ],
  [
    { text: "UAmile wanganyakazi. Amehlo akhe akhula,", start: 17, end: 19 },
    { text: "efuna ebusweni bukayise isibonakaliso sokuthi kwakungelona iqiniso.", start: 20, end: 23 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image5} alt="Page 5" className="page-image-5" />
      <img src={Image5_5} alt="Page 5" className="page-image-5-5" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 5 && currentTime >= line.start && currentTime <= line.end;
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