import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "Amile picked it up, cupped it in her hands and gasped,", start: 0, end: 4 },
    { text: "“It looks like the thing that makes plants.”", start: 5, end: 6 },
  ],
  [
    { text: "“You mean a seed?” asked Khaya.", start: 7, end: 8 },
  ],
  [
    { text: "“Yes!” said Amile. “Let's plant it and see what kind of flower it becomes.”", start: 9, end: 12 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wayicosha ngobunene wase ethi,", start: 0, end: 4 },
    { text: "“Ibukeka njengalento eyenza izitshalo.”", start: 5, end: 6 },
  ],
  [
    { text: "“Usho imbewu?” kubuza uKhaya.", start: 7, end: 8 },
  ],
  [
    { text: "“Yebo!” kusho uAmile. “Masiyitshale, sizobona ukuthi iba uhlobo luni lwembali.”", start: 9, end: 13 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image-9" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 9 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">9</section>
    </section>
  );
}

export default Page9;