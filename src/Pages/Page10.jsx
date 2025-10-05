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
    { text: "“I don’t think that’s a good idea,” said Khaya,", start: 0, end: 4.5 },
    { text: "“flowers need good soil to grow, and our town is so dry.”", start: 4.6, end: 9.5 },
  ],
  [
    { text: "“I know…” said Amile, frowning a little.", start: 9.6, end: 14.5 },
  ],
  [
    { text: "“Where are we even going to find water?” continued Khaya,", start: 14.6, end: 19.5 },
    { text: "secretly proud that she sounded so smart.", start: 19.6, end: 22.5 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Angicabangi ukuthi kuwumqondo omuhle lowo,” kusho uKhaya,", start: 0, end: 4.5 },
    { text: "“awazi yini ukuthi izimbali zidinga inhlabathi enhle ukuze zikhule, futhi idolobha lethu lomile kakhulu.”", start: 4.6, end: 9.5 },
  ],
  [
    { text: "“Ngiyazi...” kusho uAmile, ehwaqabala kancane.", start: 9.6, end: 14.5 },
  ],
  [
    { text: "“Sizowatholaphi ngisho namanzi?” waqhubeka uKhaya,", start: 14.6, end: 19.5 },
    { text: "eyaziqhenya ngokuthi wayezwakala ehlakaniphile.", start: 19.6, end: 22.5 },
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