import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import "../Styles/Page.css";

function Page17(){
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
    { text: "But one afternoon, Amile saw a sprout poking through the soil.", start: 0, end: 4.7 },
    { text: "Unlike the brittle brown grass around it,", start: 4.8, end: 7.5 },
    { text: "this sprout was blue and sparkled in the sunlight.", start: 7.6, end: 11.4 },
  ],
  [
   { text: "Amile gasped,", start: 11.5, end: 13.1 },
    { text: "“You’re alive!”", start: 13.2, end: 14.7 },
    { text: "She then ran to Khaya’s house and brought her over to see it.", start: 14.8, end: 19 },
  ]
]
  },
      zu: {
        paragraphs: [
  [
    { text: "Kodwa ngenye intambama, uAmile wabona isithombo sihluma emhlabathini.", start: 0, end: 5.6 },
    { text: "Ngokungafani notshani obunsundu obuzungezile,", start: 5.7, end: 9.1 },
    { text: "leli hlumela laliluhlaza okwesibhakabhaka futhi likhazimula elangeni.", start: 9.2, end: 14.6 },
  ],
  [
    { text: "“Ha, uyaphila!”", start: 14.7, end: 16.8 },
    { text: "kusho uAmile ngokumangala.", start: 16.9, end: 19.3 },
    { text: "Wagijima wayolanda uKhaya ukuze ayibone.", start: 19.4, end: 22.8 },
  ]
]
 }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <img src={Image17} alt="Page 17" className="page-image-17" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {      
        const isActive = currentPage === 17 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
      </p>
      ))}
     </section>

      <section className="odd">17</section>
    </section>
  );
}

export default Page17;