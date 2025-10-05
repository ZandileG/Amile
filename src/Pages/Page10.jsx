import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image10 from "../Images/Image10.png";
import "../Styles/Page.css";

function Page10(){
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
    { text: "“I don’t think that’s a good idea,” said Khaya,", start: 0, end: 4 },
    { text: "“flowers need good soil to grow, and our town is so dry.”", start: 5, end: 9 },
  ],
  [
    { text: "“I know…” said Amile, frowning a little.", start: 10, end: 12 },
  ],
  [
    { text: "“Where are we even going to find water?” continued Khaya,", start: 13, end: 15 },
    { text: "secretly proud that she sounded so smart.", start: 16, end: 22.5 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Angicabangi ukuthi kuwumqondo omuhle lowo,” kusho uKhaya,", start: 0, end: 4 },
    { text: "“awazi yini ukuthi izimbali zidinga inhlabathi enhle ukuze zikhule, futhi idolobha lethu lomile kakhulu.”", start: 5, end: 9 },
  ],
  [
    { text: "“Ngiyazi...” kusho uAmile, ehwaqabala kancane.", start: 10, end: 12 },
  ],
  [
    { text: "“Sizowatholaphi ngisho namanzi?” waqhubeka uKhaya,", start: 13, end: 15 },
    { text: "eyaziqhenya ngokuthi wayezwakala ehlakaniphile.", start: 16, end: 22.5 },
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
        const isActive = currentPage === 10 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <img src={Image10} alt="Page 10" className="page-image-10" />

      <section className="even">10</section>
    </section>
  );
}

export default Page10;