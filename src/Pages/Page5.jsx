import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image5 from "../Images/Image5.png";
import "../Styles/Page.css";

function Page5(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
 
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "One night, at dinner, her dad reached across the table and held her hand.", start: 0, end: 5 },
    { text: "“Mimi,” he began gently,", start: 6, end: 8 },
    { text: "“we have to leave Dumakude.”", start: 9, end: 11 },
  ],
  [
    { text: "Amile froze. Her eyes grew wide,", start: 12, end: 14 },
    { text: "searching her dad’s face for some sign that it wasn’t true.", start: 15, end: 18 },
  ],
   [
    { text: "“Mimi,” said her mom, holding Amile’s other hand,", start: 19, end: 20 },
    { text: "“the town’s water is gone, and the food is running out.”", start: 21, end: 23 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Ngobunye ubusuku, ngesikhathi sesidlo sakusihlwa, ubab’wakhe welula isandla sakhe ebamba esikaAmile.", start: 0, end: 6 },
    { text: "“Mimi,” washo ngesineke,", start: 7, end: 8 },
    { text: "“kufanele sihambe eDumakude.”", start: 9, end: 11 },
  ],
  [
    { text: "UAmile wanganyakazi. Amehlo akhe akhula,", start: 12, end: 14 },
    { text: "efuna ebusweni bukayise isibonakaliso sokuthi kwakungelona iqiniso.", start: 15, end: 18 },
  ],
  [
    { text: "“Mimi,” kusho uma wakhe ngomoya ophansi,", start: 19, end: 21 },
    { text: "“amanzi awasekho futhi nokudla sekuyaphela.”", start: 22, end: 23 },
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
        const isActive = currentPage === 5 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">5</section>
    </section>
  );
}

export default Page5;