import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image10 from "../Images/Image10.png";
import "../Styles/Page.css";

function Page10(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“I don’t think that’s a good idea,” said Khaya,", start: 51, end: 60 },
    { text: "“don’t you know that flowers need good soil to grow, and our town is so dry.”", start: 61, end: 70 },
  ],
  [
    { text: "“I know…” said Amile, frowning a little.", start: 71, end: 73 },
  ],
  [
    { text: "“Where are we even going to find water?” Khaya continued,", start: 74, end: 76 },
    { text: "secretly proud that she sounded so smart.", start: 77, end: 79 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Angicabangi ukuthi kuwumqondo omuhle lowo,” kusho uKhaya,", start: 51, end: 60 },
    { text: "“awazi yini ukuthi izimbali zidinga inhlabathi enhle ukuze zikhule, futhi idolobha lethu lomile kakhulu.”", start: 61, end: 70 },
  ],
  [
    { text: "“Ngiyazi...” kusho uAmile, ehwaqabala kancane.", start: 71, end: 73 },
  ],
  [
    { text: "“Sizowatholaphi ngisho namanzi?” waqhubeka uKhaya,", start: 74, end: 76 },
    { text: "eyaziqhenya ngokuthi wayezwakala ehlakaniphile.", start: 77, end: 79 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-even">
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

      <img src={Image10} alt="Page 10" className="page-image-10" />

      <section className="page-10">10</section>
    </section>
  );
}

export default Page10;